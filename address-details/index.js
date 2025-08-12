document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("saveAddressBtn");
  const changeBtn = document.querySelector(".MuiButtonBase-root.MuiButton-root");

  // Sessiondan ma'lumot olish
  let selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  // Agar ma'lumot bo'lsa inputlarga joylash
  if (selectedLocation) {
    if (selectedLocation.display_name) {
      const locationTextElement = document.querySelector(".jss28 p");
      if (locationTextElement) {
        locationTextElement.textContent = selectedLocation.display_name;
      }
    }

    // Har bir inputni to'ldirish
    document.querySelector('input[placeholder="Building Name"]').value = selectedLocation.buildingName || "";
    document.querySelector('input[placeholder="Entrance"]').value = selectedLocation.entrance || "";
    document.querySelector('input[placeholder="Door Code (Optional)"]').value = selectedLocation.doorCode || "";
    document.querySelector('input[placeholder="Floor"]').value = selectedLocation.floor || "";
    document.querySelector('input[placeholder="Apartment"]').value = selectedLocation.apartment || "";
    document.querySelector('input[placeholder="Home, Work..(Optional)"]').value = selectedLocation.homeWork || "";
    document.querySelector('input[placeholder="Other Instruction For The Courier (Optional)"]').value = selectedLocation.otherInstruction || "";
  }

  // Continue tugmasi
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (!selectedLocation) {
        alert("Iltimos, biror location tanlang.");
        return;
      }

      // Majburiy inputlarni tekshirish
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

      // Yangi qiymatlarni olish
      const buildingName = document.querySelector('input[placeholder="Building Name"]').value.trim();
      const entrance = document.querySelector('input[placeholder="Entrance"]').value.trim();
      const doorCode = document.querySelector('input[placeholder="Door Code (Optional)"]').value.trim();
      const floor = document.querySelector('input[placeholder="Floor"]').value.trim();
      const apartment = document.querySelector('input[placeholder="Apartment"]').value.trim();
      const homeWork = document.querySelector('input[placeholder="Home, Work..(Optional)"]').value.trim();
      const otherInstruction = document.querySelector('input[placeholder="Other Instruction For The Courier (Optional)"]').value.trim();

      // Hammasini sessionStorage ga saqlash
      const fullLocationData = {
        ...selectedLocation,
        buildingName,
        entrance,
        doorCode,
        floor,
        apartment,
        homeWork,
        otherInstruction
      };

      sessionStorage.setItem("selectedLocation", JSON.stringify(fullLocationData));

      // Keyingi sahifaga o'tish
      window.location.href = "../addresses";
    });
  }

  // Change tugmasi
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      sessionStorage.removeItem("selectedLocation");
      window.location.href = "../add-address";
    });
  }
});
