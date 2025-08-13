document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("saveAddressBtn");
  const changeBtn = document.querySelector(".MuiButtonBase-root.MuiButton-root");

  // 1) EditAddress bor-yo'qligini tekshirish
  let editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Agar edit bo'lsa — shuni ishlatamiz
  let activeLocation = editAddress || selectedLocation;

  // Agar index kerak bo'lsa, editAddress ni ko'rsatadigan index ni o'rnatamiz
  if (editAddress) {
    // editAddress qaysi manzil ekanini topamiz
    let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];
    let idx = addresses.findIndex(addr => addr.display_name === editAddress.display_name);
    activeLocation.index = idx !== -1 ? idx : null;
  }

  // 2) Inputlarga ma'lumotni chiqarish
  if (activeLocation) {
    if (activeLocation.display_name) {
      const locationTextElement = document.querySelector(".jss28 p");
      if (locationTextElement) {
        locationTextElement.textContent = activeLocation.display_name;
      }
    }

    const setValue = (selector, value) => {
      const input = document.querySelector(selector);
      if (input) input.value = value || "";
    };

    setValue('input[placeholder="Building Name"]', activeLocation.buildingName);
    setValue('input[placeholder="Entrance"]', activeLocation.entrance);
    setValue('input[placeholder="Door Code (Optional)"]', activeLocation.doorCode);
    setValue('input[placeholder="Floor"]', activeLocation.floor);
    setValue('input[placeholder="Apartment"]', activeLocation.apartment);
    setValue('input[placeholder="Home, Work..(Optional)"]', activeLocation.homeWork);
    setValue('input[placeholder="Other Instruction For The Courier (Optional)"]', activeLocation.otherInstruction);
  }

  // 3) Saqlash tugmasi
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!activeLocation) {
        alert("Iltimos, biror location tanlang.");
        return;
      }

      const requiredFields = [
        { selector: 'input[placeholder="Building Name"]', name: "Building Name" },
        { selector: 'input[placeholder="Entrance"]', name: "Entrance" },
        { selector: 'input[placeholder="Floor"]', name: "Floor" },
        { selector: 'input[placeholder="Apartment"]', name: "Apartment" }
      ];

      for (let field of requiredFields) {
        const value = document.querySelector(field.selector)?.value.trim();
        if (!value) {
          alert(`${field.name} maydoni majburiy!`);
          return;
        }
      }

      const fullLocationData = {
        ...activeLocation,
        buildingName: document.querySelector('input[placeholder="Building Name"]').value.trim(),
        entrance: document.querySelector('input[placeholder="Entrance"]').value.trim(),
        doorCode: document.querySelector('input[placeholder="Door Code (Optional)"]').value.trim(),
        floor: document.querySelector('input[placeholder="Floor"]').value.trim(),
        apartment: document.querySelector('input[placeholder="Apartment"]').value.trim(),
        homeWork: document.querySelector('input[placeholder="Home, Work..(Optional)"]').value.trim(),
        otherInstruction: document.querySelector('input[placeholder="Other Instruction For The Courier (Optional)"]').value.trim()
      };

      // Eski manzillarni olish yoki bo'sh massiv yaratish
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      // Agar edit bo'lsa — eski manzilni yangilash
      if (activeLocation.index != null && addresses[activeLocation.index]) {
        addresses[activeLocation.index] = fullLocationData;
      } else {
        addresses.push(fullLocationData);
      }

      sessionStorage.setItem("addresses", JSON.stringify(addresses));
      sessionStorage.removeItem("selectedLocation");
      sessionStorage.removeItem("editAddress");

      window.location.href = "../addresses";
    });
  }

  // 4) Change tugmasi (manzilni o'zgartirish)
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      const editAddress = JSON.parse(sessionStorage.getItem("editAddress"));
      let addresses = JSON.parse(sessionStorage.getItem("addresses")) || [];

      if (editAddress) {
        // O‘chirish: har bir elementni chuqur tekshiramiz
        addresses = addresses.filter(addr => {
          // To'liq obyektni tekshirish (JSON string bo‘yicha)
          return JSON.stringify(addr) !== JSON.stringify(editAddress);
        });
        sessionStorage.setItem("addresses", JSON.stringify(addresses));
        sessionStorage.removeItem("editAddress");
      }

      sessionStorage.removeItem("selectedLocation");
      window.location.href = "../add-address";
    });
  }

  
});
