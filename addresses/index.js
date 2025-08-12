document.addEventListener("DOMContentLoaded", () => {
  // Sessiondan ma'lumot olish
  const selectedLocation = JSON.parse(sessionStorage.getItem("selectedLocation"));

  if (selectedLocation) {
    // homeWork qiymatini p ichiga chiqarish
    const homeWorkElement = document.querySelector('p[style*="padding-left: 30px"]');
    if (homeWorkElement) {
      homeWorkElement.textContent = selectedLocation.homeWork || "--";
    }

    // Location manzilini chiqarish
    const locationTextElement = document.querySelector(".jss29 .text-trauncate.text-blue");
    if (locationTextElement) {
      locationTextElement.textContent = selectedLocation.display_name || "Location not found";
    }

  }
});

document.addEventListener("DOMContentLoaded", () => {
  const editIcon = document.querySelector('[data-testid="EditIcon"]');
  const deleteIcon = document.querySelector('[data-testid="DeleteForeverIcon"]');

  // EDIT bosilganda
  if (editIcon) {
      editIcon.addEventListener("click", () => {   
      // address-details sahifasiga o'tkazish
      window.location.href = "../address-details/";
    });
  }

  // DELETE bosilganda
  if (deleteIcon) {
    deleteIcon.addEventListener("click", () => {
      sessionStorage.removeItem("selectedLocation");
      // add-address sahifasiga o'tkazish
      window.location.href = "../add-address";
    });
  }
});

function addNewAddress(){
    window.location.href='../add-address'
}