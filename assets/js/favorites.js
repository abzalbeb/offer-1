(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // localStorage'dan favorites olish
    let favorites;
    try {
      favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (!Array.isArray(favorites)) favorites = [];
    } catch (e) {
      favorites = [];
    }

    const container = document.getElementById("favorites-container");
    if (!container) return; // element yo'q bo'lsa, hech narsa qilmaymiz

    // Mahsulotlarni chiqarish
// 1. PIZZA mahsulotlar (faqat type === 'pizza')
favorites
  .filter(item => item.type === 'pizza')
  .forEach(item => {
    const productHTML = `
      <div class="jss32 ">
        <div class="jss34 product" 
             data-id="${item.id}"
             data-img="${item.img}"
             data-img_1="${item.img_1}"
             data-title="${item.title}"
             data-description="${item.description}"
             data-price="${item.price}"
             data-aksiya-price="${item.aksiyaPrice || ""}"
             data-type="${item.type || ''}"
             data-ingredients="${item.Ingredients || ''}"
             data-aksiya-price="${item.price}">
          <div class="jss35">
            <label class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1tuw01h">
              <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-7avhyl" 
                    aria-label="Add/Remove product from favorites" style="z-index: 1;">
                <input class="PrivateSwitchBase-input css-1m9pwf3" name="favorite" type="checkbox" data-indeterminate="false">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14h0jh8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path>
                </svg>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </span>
              <!-- Sevimlilarga qo'shilgan holat (qizil yurak) -->
              <span style="display: none;" class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3">
                <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-7avhyl" 
                      aria-label="Add/Remove product from favorites" style="z-index: 1;">
                  <input class="PrivateSwitchBase-input css-1m9pwf3" name="favorite" type="checkbox" data-indeterminate="false">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14h0jh8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
                    <path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </span>
              </span>
            </label>
          </div>

          <div style="display: flex; justify-content: center;">
            <img src="${item.img}" loading="eager" alt="${item.title}"
                 decoding="async"
                 style="width: 220px; height: 120px; object-fit: contain; aspect-ratio: 1.5 / 1;">
          </div>

          <div style="min-height: 110px; display: flex; flex-direction: column;">
            <div style="flex: 1 1 0%;">
              <p class="jss36 text-trauncate" style="font-weight: bold;">${item.title}</p>
              <p class="jss37 text-trauncate">${item.description}</p>
            </div>
            <div class="jss40">
              <div>
                <p class="fs-18 text-red "><span class="for_price"></span> ₾</p>
                <p class="fs-18 text-red product-price "><span class="for_aksiyaPrice">${item.price}</span>0 ₾</p>
              </div>
              <button class="jss411" aria-label="Add to cart">Order</button>
              <!-- PIZZA uchun qty-container QO'SHMAYMIZ -->
            </div>
          </div>
        </div>
        <div style="position: absolute; top: 10px; left: 10px; display: block;"></div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });

// 2. BOSHQA mahsulotlar (type !== 'pizza' yoki null)
favorites
  .filter(item => item.type !== 'pizza')
  .forEach(item => {

    console.log(item.price);
    
    const productHTML = `
      <div class="jss32">
        <div class="jss34 product" 
             data-id="${item.id}"
             data-img="${item.img}"
             data-title="${item.title}"
             data-description="${item.description}"
             data-price="${item.price}"
             data-aksiya-price="${item.aksiyaPrice || ""}"
             data-type="${item.type || ''}"
             data-ingredients="${item.Ingredients || ''}">
          <div class="jss35">
            <label class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1tuw01h">
              <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-7avhyl" 
                    aria-label="Add/Remove product from favorites" style="z-index: 1;">
                <input class="PrivateSwitchBase-input css-1m9pwf3" name="favorite" type="checkbox" data-indeterminate="false">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14h0jh8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path>
                </svg>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </span>
              <!-- Sevimlilarga qo'shilgan holat (qizil yurak) -->
              <span style="display: none;" class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3">
                <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-7avhyl" 
                      aria-label="Add/Remove product from favorites" style="z-index: 1;">
                  <input class="PrivateSwitchBase-input css-1m9pwf3" name="favorite" type="checkbox" data-indeterminate="false">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14h0jh8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
                    <path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </span>
              </span>
            </label>
          </div>

          <div style="display: flex; justify-content: center;">
            <img src="${item.img}" loading="eager" alt="${item.title}"
                 decoding="async"
                 style="width: 220px; height: 120px; object-fit: contain; aspect-ratio: 1.5 / 1;">
          </div>

          <div style="min-height: 110px; display: flex; flex-direction: column;">
            <div style="flex: 1 1 0%;">
              <p class="jss36 text-trauncate" style="font-weight: bold;">${item.title}</p>
              <p class="jss37 text-trauncate">${item.description}</p>
            </div>
            <div class="jss40">
                  <div>
                    <p class="fs-18 text-red "><span class="for_price">${item.aksiyaPrice}</span> ₾</p>
                    <p class="fs-18 text-red product-price" style="color: rgb(0, 0, 0); font-size: 12px; font-weight: 500; text-decoration: line-through;"> <span class="for_aksiyaPrice">${item.price}</span> ₾</p>
                  </div>
              <button class="jss41" aria-label="Add to cart">Order</button>
              <!-- Boshqa mahsulotlar uchun qty-container QO'SHAMIZ -->
              <div class="qty-container" style="margin-left:auto; display:none">
                <div class="Kanit-Regular" style="display: inline-flex;">
                  <div class="qty-minus"
                       style="border-radius:100px; width:39px; height:39px; display:inline-flex; justify-content:center; align-items:center; cursor:pointer; background:rgb(0,120,174); color:#fff; box-shadow:lightgrey 0px 2px 4px 3px;">
                       -
                  </div>
                  <div class="qty-count Kanit-Regular"
                       style="width:39px; height:39px; display:inline-flex; justify-content:center; align-items:center; font-size:24px; margin:0 4px;">
                       1
                  </div>
                  <div class="qty-plus"
                       style="border-radius:100px; width:39px; height:39px; display:inline-flex; justify-content:center; align-items:center; cursor:pointer; background:rgb(0,120,174); color:#fff; box-shadow:lightgrey 0px 2px 4px 3px;">
                       +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="position: absolute; top: 10px; left: 10px; display: block;"></div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });

    // Mahsulot sonini yangilash va + / - ni ishlatish uchun ichki funksiya
    function updateQuantityUI(product, id) {
        let cart = [];
        try {
            cart = JSON.parse(localStorage.getItem("cart") || "[]");
            if (!Array.isArray(cart)) cart = [];
        } catch (_) {
            cart = [];
        }

        const cartItem = cart.find(item => item.id === id);
        if (!cartItem) return;

        const minusBtn = product.querySelector(".qty-minus");
        const plusBtn = product.querySelector(".qty-plus");
        const countEl = product.querySelector(".qty-count");
        const type = product.dataset.type;

        if (!minusBtn || !plusBtn || !countEl) return;

        countEl.textContent = cartItem.count;

        // 🔹 Cart.js bilan mos narx tizimi: price - asl narx, aksiyaPrice - aksiya narxi
        if (type === 'pizza') {
            // Pizza uchun: for_aksiyaPrice da aksiya narxi ko'rsatiladi
            const priceEl = product.querySelector(".product-price .for_aksiyaPrice");
            if (priceEl) {
                priceEl.textContent = (cartItem.aksiyaPrice * cartItem.count).toFixed(2);
            }
        } else {
            // Boshqa mahsulotlar uchun
            const oldPriceEl = product.querySelector(".for_price"); // asl narx (chizilmagan)
            const newPriceEl = product.querySelector(".product-price .for_aksiyaPrice"); // aksiya narxi (chizilgan)

            if (oldPriceEl) {
                // for_price da asl narx
                oldPriceEl.textContent = (cartItem.price * cartItem.count).toFixed(2);
            }
            
            if (newPriceEl && cartItem.aksiyaPrice) {
                // for_aksiyaPrice da aksiya narxi
                newPriceEl.textContent = (cartItem.aksiyaPrice * cartItem.count).toFixed(2) ;
            }
        }

        // 🔹 + va - tugmalarni boshqarish
        plusBtn.onclick = () => {
            cartItem.count += 1;
            cartItem.total = cartItem.count * (cartItem.aksiyaPrice || cartItem.price);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateQuantityUI(product, id);
            if (typeof updateCartBadge === "function") updateCartBadge();
            if (typeof updateCartPopup === "function") updateCartPopup();
        };

        minusBtn.onclick = () => {
            cartItem.count -= 1;
            if (cartItem.count <= 0) {
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem("cart", JSON.stringify(cart));
                const qtyContainer = product.querySelector(".qty-container");
                if (qtyContainer) qtyContainer.style.display = "none";
                product.querySelector(".jss41").style.display = "inline-block";
            } else {
                cartItem.total = cartItem.count * (cartItem.aksiyaPrice || cartItem.price);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateQuantityUI(product, id);
            }
            if (typeof updateCartBadge === "function") updateCartBadge();
            if (typeof updateCartPopup === "function") updateCartPopup();
        };
    }

    // === jss411 tugmalariga delegation (Pizza uchun selectedProduct saqlash) ===
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".jss411");
      if (!btn) return;
      const product = btn.closest(".product");
      if (!product) return;

      const id = product.dataset.id;
      const img = product.dataset.img;
      const img_1 = product.dataset.img_1;
      const title = product.dataset.title;
      const description = product.dataset.description;
      // Cart.js bilan mos qilish: price - asl narx, aksiyaPrice - aksiya narxi
      const aksiyaPrice = parseFloat(product.dataset.price); // aksiya narxi
      const price = parseFloat(product.dataset.aksiyaPrice); // asl narx
      const ingredients = product.dataset.ingredients || '';
      const type = product.dataset.type;

      // selectedProduct obyektini yaratamiz
      const selectedProduct = {
        id: id,
        title: title,
        description: description,
        img: img,
        img_1: img_1,
        price: price,
        aksiyaPrice: aksiyaPrice,
        type: type,
        Ingredients: ingredients
      };

      // localStorage ga selectedProduct nomida saqlaymiz
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      window.location.href='../details-pizza/'
      
      console.log("Selected product saved:", selectedProduct);
    });

    // === Order tugmalariga delegation ===
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".jss41");
      if (!btn) return;
      const product = btn.closest(".product");
      if (!product) return;

      const id = product.dataset.id;
      const img = product.dataset.img;
      const title = product.dataset.title;
      const description = product.dataset.description;
      // Cart.js bilan mos qilish: price - asl narx, aksiyaPrice - aksiya narxi
      const aksiyaPrice = parseFloat(product.dataset.price); // aksiya narxi
      const price = parseFloat(product.dataset.aksiyaPrice); // asl narx
      const type = product.dataset.type;

      
      

      let cart = [];
      try {
        cart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (!Array.isArray(cart)) cart = [];
      } catch (_) {
        cart = [];
      }

      const existing = cart.find(item => item.id === id);
      if (!existing) {
        cart.push({
          id,
          img,
          title,
          description,
          price,        // asl narx
          aksiyaPrice,  // aksiya narxi
          type,
          count: 1,
          total: aksiyaPrice || price
        });
        localStorage.setItem("cart", JSON.stringify(cart));

        // Agar pizza bo'lmasa qty-container ko'rsatamiz
        if (type !== 'pizza') {
          btn.style.display = "none";
          const qtyBox = product.querySelector(".qty-container");
          if (qtyBox) qtyBox.style.display = "flex";
          updateQuantityUI(product, id);
        }
        
        if (typeof updateCartBadge === "function") updateCartBadge();
        if (typeof updateCartPopup === "function") updateCartPopup();
      }
    });

    // === Sahifa yuklanganda cart bilan sinxronlash ===
    try {
      const cartNow = JSON.parse(localStorage.getItem("cart") || "[]");
      document.querySelectorAll("#favorites-container .product").forEach(product => {
        const id = product.dataset.id;
        const type = product.dataset.type;
        const cartItem = cartNow.find(x => x.id === id);
        
        if (cartItem && cartItem.count > 0 && type !== 'pizza') {
          const orderBtn = product.querySelector(".jss41");
          const qtyBox = product.querySelector(".qty-container");
          if (orderBtn) orderBtn.style.display = "none";
          if (qtyBox) qtyBox.style.display = "flex";
          updateQuantityUI(product, id);
        }
      });
      if (typeof updateCartBadge === "function") updateCartBadge();
      if (typeof updateCartPopup === "function") updateCartPopup();
    } catch (_) {}
  });
})();

setTimeout(() => {
  document.querySelectorAll("#favorites-container .for_price").forEach(priceEl => {
    if (priceEl.textContent.includes('₾')) {
      priceEl.textContent = priceEl.textContent.replace('₾', '').trim();
    }
  });
}, 50);