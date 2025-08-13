document.addEventListener("DOMContentLoaded", () => {
    const locations = JSON.parse(sessionStorage.getItem("addresses")) || [];
    const container = document.getElementById("address-container");
    container.innerHTML = "";

        if (locations.length === 0) {
        window.location.href = "../add-address/";
        return; // keyingi kod ishlamasligi uchun
    }

    locations.forEach((loc, index) => {
        const wrapper = document.createElement("div");

        // homeWork ni chiqarish
        const p = document.createElement("p");
        p.style.paddingLeft = "30px";
        p.style.margin = "0px";
        p.textContent = loc.homeWork || "--";

        // asosiy blok
        const jssDiv = document.createElement("div");
        jssDiv.className = "jss29";
        jssDiv.style.border = "3.5px solid rgb(0, 120, 174)";

        jssDiv.innerHTML = `
            <div>
                <p class="text-trauncate text-blue Kanit-SemiBold fs-20">
                    ${loc.display_name || "Location not found"}
                </p>
                <span class="text-trauncate text-gray fs-14 Kanit-Light">--</span>
            </div>
            <div style="display: flex; gap: 14px;">
                <svg class="edit-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss9 css-vubbuv" 
                     focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04
                             c.39-.39.39-1.02 0-1.41l-2.34-2.34
                             a.9959.9959 0 0 0-1.41 0l-1.83 1.83 
                             3.75 3.75z"></path>
                </svg>
                <svg class="delete-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" 
                     focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-index="${index}">
                    <path d="M6 19c0 1.1.9 2 2 2h8
                             c1.1 0 2-.9 2-2V7H6zm2.46-7.12 
                             1.41-1.41L12 12.59l2.12-2.12 
                             1.41 1.41L13.41 14l2.12 2.12
                             -1.41 1.41L12 15.41l-2.12 2.12
                             -1.41-1.41L10.59 14zM15.5 4l-1-1
                             h-5l-1 1H5v2h14V4z"></path>
                </svg>
            </div>
        `;

        wrapper.appendChild(p);
        wrapper.appendChild(jssDiv);
        container.appendChild(wrapper);
    });

    // EDIT bosilganda
    document.querySelectorAll(".edit-icon").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const selectedAddress = locations[idx];
            // tanlangan manzilni vaqtinchalik sessionga yozamiz
            sessionStorage.setItem("editAddress", JSON.stringify(selectedAddress));
            window.location.href = "../address-details/";
        });
    });

    // DELETE bosilganda
    document.querySelectorAll(".delete-icon").forEach(icon => {
        icon.addEventListener("click", (e) => {
            const idx = e.currentTarget.getAttribute("data-index");
            const updated = locations.filter((_, i) => i != idx);
            sessionStorage.setItem("addresses", JSON.stringify(updated));
            window.location.reload();
        });
    });
});

function addNewAddress(){
    window.location.href='../add-address';
}
