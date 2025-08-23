if (window.matchMedia("(max-width: 600px)").matches) {
  // Agar 600px yoki kichik bo'lsa
  const defaultSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.2701943138118!2d44.77608106923325!3d41.722385888711855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d8130f5821%3A0x4625ee8d7b40614b!2sDi%20Roma!5e0!3m2!1sen!2sus!4v1754915514556!5m2!1sen!2sus";

  function loadIframe(src) {
    document.querySelector(".map-iframe").innerHTML = `
      <iframe 
        src="${src}" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>`;
  }

  const addressInput = document.getElementById("addressInputMobile");
  const pacContainer = document.querySelector(".pac-containerMobile");
  const continueBtn = document.querySelector(".btnLocationMobile");

  // Tanlangan joyni vaqtinchalik saqlash uchun global o'zgaruvchi
  let tempSelectedLocation = null;

  // Sahifa yuklanganda, sessionStorage'dagi tanlangan joyni yuklash (agar bo'lsa)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    addressInput.value = savedSelectedLocation.display_name;
    loadIframe(`https://www.google.com/maps?q=${savedSelectedLocation.lat},${savedSelectedLocation.lon}&z=15&output=embed`);
    tempSelectedLocation = savedSelectedLocation;  // shu yerga qo'shdim
  } else {
    loadIframe(defaultSrc);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(`https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`);

          // Geolokatsiyani tempSelectedLocation ga yozamiz
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
          console.warn("Geolocation error:", err.message);
        }
      );
    }
  }

  let searchTimeout;

  addressInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchTimeout);

    if (!query) {
      pacContainer.style.display = "none";
      return;
    }

    searchTimeout = setTimeout(() => {
      fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=6`)
        .then(res => res.json())
        .then(data => {
          pacContainer.innerHTML = "";

          if (!data.features || data.features.length === 0) {
            pacContainer.style.display = "none";
            return;
          }

          data.features.forEach(loc => {
            const item = document.createElement("div");
            item.className = "pac-item";
            item.style.cursor = "pointer";

            // Icon span
            const icon = document.createElement("span");
            icon.className = "pac-icon pac-icon-marker";

            // Matn qismlari
            const displayName = [
              loc.properties.name || "",
              loc.properties.city || "",
              loc.properties.country || ""
            ].filter(Boolean);

            const firstPart = displayName[0] || "";
            const restParts = displayName.slice(1).join(", ");

            const querySpan = document.createElement("span");
            querySpan.className = "pac-item-query";
            const matchedText = firstPart.slice(0, query.length);
            const restText = firstPart.slice(query.length);
            querySpan.innerHTML = `<span class="pac-matched">${matchedText}</span>${restText}`;

            const restSpan = document.createElement("span");
            restSpan.textContent = restParts;

            item.appendChild(icon);
            item.appendChild(querySpan);
            item.appendChild(restSpan);

            item.addEventListener("click", () => {
              const fullDisplayName = displayName.join(", ");
              addressInput.value = fullDisplayName;
              pacContainer.style.display = "none";

              // Xarita yangilash
              loadIframe(`https://www.google.com/maps?q=${loc.geometry.coordinates[1]},${loc.geometry.coordinates[0]}&z=15&output=embed`);

              // Bu joy vaqtinchalik tanlangan location sifatida saqlanadi,
              // ammo sessionStorage ga hozircha saqlanmidi
              tempSelectedLocation = {
                lat: loc.geometry.coordinates[1],
                lon: loc.geometry.coordinates[0],
                display_name: fullDisplayName
              };
            });

            pacContainer.appendChild(item);
          });

          pacContainer.style.display = "block";
        })
        .catch(() => {
          pacContainer.style.display = "none";
        });
    }, 100);
  });

  // Dropdown tashqarisiga bosganda yopish
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
        document.querySelector('#Toastify-error').style.setProperty('display', 'flex', 'important');
          setTimeout(()=>{
           document.querySelector('#Toastify-error').style.setProperty('display', 'none', 'important');
      },2000)
      return;
    }

    // 1) Agar editAddress mavjud bo'lsa — uni yangilab qaytarish
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // faqat location ma'lumotlarini yangilaymiz
      const updatedEdit = {
        ...editAddress,
        lat: tempSelectedLocation.lat,
        lon: tempSelectedLocation.lon,
        display_name: tempSelectedLocation.display_name
      };

      sessionStorage.setItem("editAddress", JSON.stringify(updatedEdit));
      window.location.href = "../address-details/";
      return; // shu yerda to'xtaymiz
    }

    // 2) Oddiy yangi manzil qo'shish holati
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });



  // Autocomplete ishga tushgandan keyin
  const input = document.getElementById("addressInputMobile");


  if (pacContainer && input.parentElement) {
      input.parentElement.appendChild(pacContainer);
      pacContainer.style.position = "absolute";
      pacContainer.style.top = input.offsetHeight + "px";
      pacContainer.style.left = "0";
      pacContainer.style.width = input.offsetWidth + "px";
  }

  window.addEventListener("DOMContentLoaded", () => {
    const editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      const parsed = JSON.parse(editAddress);
      
      // Inputga mavjud manzilni chiqaramiz
      if (addressInput) {
        addressInput.value = parsed.display_name || "";
      }

      // Agar map bo'lsa, marker joylashtirib qo'yamiz
      if (parsed.lat && parsed.lon) {
        const lat = parsed.lat;
        const lon = parsed.lon;

        // Bu joyda sening xarita update qiluvchi funksiyang bo'lishi kerak.
        // Masalan:
        updateMapMarker(lat, lon, parsed.display_name);
      }
    }
  });
} else {
  // Agar 600px dan katta bo'lsa — SENING KODING SHU YERDA ISHLAYDI
  
  const defaultSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.2701943138118!2d44.77608106923325!3d41.722385888711855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d8130f5821%3A0x4625ee8d7b40614b!2sDi%20Roma!5e0!3m2!1sen!2sus!4v1754915514556!5m2!1sen!2sus";

  function loadIframe(src) {
    document.getElementById("map").innerHTML = `
      <iframe 
        src="${src}" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>`;
  }

  const addressInput = document.getElementById("addressInput");
  const pacContainer = document.querySelector(".pac-container");
  const continueBtn = document.querySelector(".btnLocation");

  // Tanlangan joyni vaqtinchalik saqlash uchun global o'zgaruvchi
  let tempSelectedLocation = null;

  // Sahifa yuklanganda, sessionStorage'dagi tanlangan joyni yuklash (agar bo'lsa)
  let savedSelectedLocation = sessionStorage.getItem("selectedLocation");
  if (savedSelectedLocation) {
    savedSelectedLocation = JSON.parse(savedSelectedLocation);
    addressInput.value = savedSelectedLocation.display_name;
    loadIframe(`https://www.google.com/maps?q=${savedSelectedLocation.lat},${savedSelectedLocation.lon}&z=15&output=embed`);
    tempSelectedLocation = savedSelectedLocation;  // shu yerga qo'shdim
  } else {
    loadIframe(defaultSrc);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          loadIframe(`https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`);

          // Geolokatsiyani tempSelectedLocation ga yozamiz
          tempSelectedLocation = {
            lat,
            lon,
            display_name: "Current Location"
          };
        },
        err => {
          console.warn("Geolocation error:", err.message);
        }
      );
    }
  }

  let searchTimeout;

  addressInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchTimeout);

    if (!query) {
      pacContainer.style.display = "none";
      return;
    }

    searchTimeout = setTimeout(() => {
      fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=6`)
        .then(res => res.json())
        .then(data => {
          pacContainer.innerHTML = "";

          if (!data.features || data.features.length === 0) {
            pacContainer.style.display = "none";
            return;
          }

          data.features.forEach(loc => {
            const item = document.createElement("div");
            item.className = "pac-item";
            item.style.cursor = "pointer";

            // Icon span
            const icon = document.createElement("span");
            icon.className = "pac-icon pac-icon-marker";

            // Matn qismlari
            const displayName = [
              loc.properties.name || "",
              loc.properties.city || "",
              loc.properties.country || ""
            ].filter(Boolean);

            const firstPart = displayName[0] || "";
            const restParts = displayName.slice(1).join(", ");

            const querySpan = document.createElement("span");
            querySpan.className = "pac-item-query";
            const matchedText = firstPart.slice(0, query.length);
            const restText = firstPart.slice(query.length);
            querySpan.innerHTML = `<span class="pac-matched">${matchedText}</span>${restText}`;

            const restSpan = document.createElement("span");
            restSpan.textContent = restParts;

            item.appendChild(icon);
            item.appendChild(querySpan);
            item.appendChild(restSpan);

            item.addEventListener("click", () => {
              const fullDisplayName = displayName.join(", ");
              addressInput.value = fullDisplayName;
              pacContainer.style.display = "none";

              // Xarita yangilash
              loadIframe(`https://www.google.com/maps?q=${loc.geometry.coordinates[1]},${loc.geometry.coordinates[0]}&z=15&output=embed`);

              // Bu joy vaqtinchalik tanlangan location sifatida saqlanadi,
              // ammo sessionStorage ga hozircha saqlanmidi
              tempSelectedLocation = {
                lat: loc.geometry.coordinates[1],
                lon: loc.geometry.coordinates[0],
                display_name: fullDisplayName
              };
            });

            pacContainer.appendChild(item);
          });

          pacContainer.style.display = "block";
        })
        .catch(() => {
          pacContainer.style.display = "none";
        });
    }, 100);
  });

  // Dropdown tashqarisiga bosganda yopish
  continueBtn.addEventListener("click", () => {
    if (!tempSelectedLocation) {
        document.querySelector('#Toastify').style.setProperty('display', 'flex', 'important');
          setTimeout(()=>{
           document.querySelector('#Toastify').style.setProperty('display', 'none', 'important');
      },2000)
      return;
    }

    // 1) Agar editAddress mavjud bo'lsa — uni yangilab qaytarish
    let editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);

      // faqat location ma'lumotlarini yangilaymiz
      const updatedEdit = {
        ...editAddress,
        lat: tempSelectedLocation.lat,
        lon: tempSelectedLocation.lon,
        display_name: tempSelectedLocation.display_name
      };

      sessionStorage.setItem("editAddress", JSON.stringify(updatedEdit));
      window.location.href = "../address-details/";
      return; // shu yerda to'xtaymiz
    }

    // 2) Oddiy yangi manzil qo'shish holati
    sessionStorage.setItem("selectedLocation", JSON.stringify(tempSelectedLocation));
    window.location.href = "../address-details/";
  });



  // Autocomplete ishga tushgandan keyin
  const input = document.getElementById("addressInput");


  if (pacContainer && input.parentElement) {
      input.parentElement.appendChild(pacContainer);
      pacContainer.style.position = "absolute";
      pacContainer.style.top = input.offsetHeight + "px";
      pacContainer.style.left = "0";
      pacContainer.style.width = input.offsetWidth + "px";
  }

  window.addEventListener("DOMContentLoaded", () => {
    const editAddress = sessionStorage.getItem("editAddress");
    if (editAddress) {
      const parsed = JSON.parse(editAddress);
      
      // Inputga mavjud manzilni chiqaramiz
      if (addressInput) {
        addressInput.value = parsed.display_name || "";
      }

      // Agar map bo'lsa, marker joylashtirib qo'yamiz
      if (parsed.lat && parsed.lon) {
        const lat = parsed.lat;
        const lon = parsed.lon;

        // Bu joyda sening xarita update qiluvchi funksiyang bo'lishi kerak.
        // Masalan:
        updateMapMarker(lat, lon, parsed.display_name);
      }
    }
  });
}

function myAddressInfo() {
  const addressStr = sessionStorage.getItem('addresses');

  if (!addressStr) {
    return;
  }

  let addresses;
  try {
    addresses = JSON.parse(addressStr);
  } catch (e) {
    console.error("addresses JSON parse qilishda xatolik:", e);
    return;
  }

  // Agar array bo‘sh bo‘lsa, sahifaga o‘tkazmaymiz
  if (!Array.isArray(addresses) || addresses.length === 0) {
    return;
  }

  // Hammasi to‘g‘ri bo‘lsa, sahifaga yo‘naltiramiz
  window.location.href = '../addresses';
}

