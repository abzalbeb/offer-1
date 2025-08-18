if (window.matchMedia("(max-width: 900px)").matches) {
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
if (!Array.isArray(cart)) cart = [];

// Badge yangilash (cartdagi tovar turlari soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const countCart = document.querySelector(".countCartMobile");

    // Har bir mahsulot bitta item deb olinadi
    const totalCount = cart.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex"; // ko'rsatish
    } else {
        countCart.style.display = "none"; // berkitish
    }
}

// --- YANGI FUNKSIYA: cart-popup ni yangilash ---
function updateCartPopup() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.querySelector(".item-card-container");
  const cartItemMap = document.querySelector(".cart-item-map-container");
  const emptyImg = document.querySelector(".cart-popup-img");
  const totalEl = document.querySelector(".cart-total .redflag");

  if (!container || !cartItemMap || !emptyImg || !totalEl) return;

  container.innerHTML = ""; // eski elementlarni tozalash

  if (cart.length === 0) {
    cartItemMap.style.display = "none";
    emptyImg.style.display = "flex";
    totalEl.textContent = " 0.00";
    return;
  }

  cartItemMap.style.display = "block";
  emptyImg.style.display = "none";

  let total = 0;

  cart.forEach(item => {
    total += item.total;

    // DOM tuzilmasini aynan sen bergan ko‘rinishda yaratamiz
    const div = document.createElement("div");
    div.className = "item-card-container";
    div.innerHTML = `
      <div class="img-cart-item">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="card-text-info-item">
        <p>${item.title}</p>
        <span>${item.description || ''}</span>
      </div>
      <div class="card-price-item">
        <p class="fs-18 text-red redflag" style="font-size:15px;">
          ${item.total.toFixed(2)}<b>₾</b>
        </p>
      </div>
    `;
    container.appendChild(div);
  });

  totalEl.textContent = " " + total.toFixed(2);
}

// LocalStorage saqlash va totalni hisoblash
function saveCart() {
  cart.forEach(item => {
    item.total = (item.aksiyaPrice || item.price) * item.count;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge(); // HAR SAFAR cart o'zganda badge yangilansin
  updateCartPopup(); // --- YANGI CHAQRUV: popupni yangilash ---
}

// Eski click handlerlarni tozalash
// document.querySelectorAll(".jss41").forEach(btn => {
//   btn.replaceWith(btn.cloneNode(true));
// });

// Add to cart tugmasi bosilganda
// document.querySelectorAll(".jss41").forEach(btn => {
//   btn.addEventListener("click", function () {
//     let product = this.closest(".product");

//     let id = product.dataset.id;
//     let img = product.dataset.img;
//     let title = product.dataset.title;
//     let description = product.dataset.description;
//     let price = parseFloat(product.dataset.price);
//     let aksiyaPrice = parseFloat(product.dataset.aksiyaPrice) || null;

//     let existing = cart.find(item => item.id === id);

//     if (!existing) {
//       cart.push({
//         id,
//         img,
//         title,
//         description,
//         price,
//         aksiyaPrice,
//         count: 1,
//         total: aksiyaPrice ? aksiyaPrice : price
//       });
//       saveCart();

//       this.style.display = "none";
//       product.querySelector(".qty-container").style.display = "flex";
//       updateQuantityUI(product, id);
//     }
//   });
// });

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".jss41");
  if (!btn) return;

  const product = btn.closest(".product");
  if (!product) return;

  let id = product.dataset.id;
  let img = product.dataset.img;
  let title = product.dataset.title;
  let description = product.dataset.description;
  let price = parseFloat(product.dataset.price);
  let aksiyaPrice = parseFloat(product.dataset.aksiyaPrice) || null;

  let existing = cart.find(item => item.id === id);

  if (!existing) {
    cart.push({
      id,
      img,
      title,
      description,
      price,
      aksiyaPrice,
      count: 1,
      total: aksiyaPrice ? aksiyaPrice : price
    });
    saveCart();

    // UI: Order tugmasini yashirib, qty-container’ni ko‘rsatamiz
    btn.style.display = "none";
    const qtyBox = product.querySelector(".qty-container");
    if (qtyBox) qtyBox.style.display = "flex";

    // Sening mavjud funksiyang — count/price ni yangilaydi
    if (typeof updateQuantityUI === "function") {
      updateQuantityUI(product, id);
    }
  }
});

// Mahsulot uchun plus/minus UI ni yangilash
function updateQuantityUI(product, id) {
  let cartItem = cart.find(item => item.id === id);
  if (!cartItem) return;

  let minusBtn = product.querySelector(".qty-minus");
  let plusBtn = product.querySelector(".qty-plus");
  let countEl = product.querySelector(".qty-count");
  let priceEl = product.querySelector(".for_price");

  countEl.textContent = cartItem.count;
  priceEl.innerHTML = cartItem.total.toFixed(2) + "<b>₾</b>";

  plusBtn.onclick = () => {
    cartItem.count += 1;
    saveCart();
    updateQuantityUI(product, id);
  };

  minusBtn.onclick = () => {
    cartItem.count -= 1;
    if (cartItem.count <= 0) {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      product.querySelector(".qty-container").style.display = "none";
      product.querySelector(".jss41").style.display = "inline-block";
      priceEl.innerHTML = (cartItem.aksiyaPrice || cartItem.price).toFixed(2) + "<b>₾</b>";
    } else {
      saveCart();
      updateQuantityUI(product, id);
    }
  };
}

// --- Sahifa yuklanganda UI tiklash + badge tiklash ---
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge(); // sahifa yangilanganda badge to‘g‘ri bo‘lsin
  updateCartPopup(); // --- YANGI CHAQRUV: sahifa yangilganda popup ham to‘g‘ri bo‘lsin

  document.querySelectorAll(".product").forEach(product => {
    let id = product.dataset.id;
    let cartItem = cart.find(item => item.id === id);

    if (cartItem && cartItem.count > 0) {
      product.querySelector(".jss41").style.display = "none";
      product.querySelector(".qty-container").style.display = "flex";
      updateQuantityUI(product, id);
    } else {
      product.querySelector(".jss41").style.display = "inline-block";
      product.querySelector(".qty-container").style.display = "none";
    }
  });
});
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');

let hideTimeout;

// Icon ustiga kirganda popup ochiladi
cartIcon.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); // Agar yopilish kutyapti bo'lsa - bekor qilamiz
  cartPopup.style.display = 'flex';
});

// Icon ustidan chiqqanda - tekshirib turamiz
cartIcon.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    if (!cartPopup.matches(':hover')) {
      cartPopup.style.display = 'none';
    }
  }, 1500); // 200ms vaqt beramiz - foydalanuvchi popupga o'tib olishiga
});

// Popupdan chiqqanda ham yopamiz
cartPopup.addEventListener('mouseleave', () => {
  cartPopup.style.display = 'none';
});

// Popup ustiga kirganda - yopilish kutyapti bo'lsa, bekor qilamiz
cartPopup.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
});




}else{


let cart = JSON.parse(localStorage.getItem("cart") || "[]");
if (!Array.isArray(cart)) cart = [];

// Badge yangilash (cartdagi tovar turlari soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const countCart = document.querySelector(".countCart");

    // Har bir mahsulot bitta item deb olinadi
    const totalCount = cart.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex"; // ko'rsatish
    } else {
        countCart.style.display = "none"; // berkitish
    }
}

// --- YANGI FUNKSIYA: cart-popup ni yangilash ---
function updateCartPopup() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.querySelector(".item-card-container");
  const cartItemMap = document.querySelector(".cart-item-map-container");
  const emptyImg = document.querySelector(".cart-popup-img");
  const totalEl = document.querySelector(".cart-total .redflag");

  if (!container || !cartItemMap || !emptyImg || !totalEl) return;

  container.innerHTML = ""; // eski elementlarni tozalash

  if (cart.length === 0) {
    cartItemMap.style.display = "none";
    emptyImg.style.display = "flex";
    totalEl.textContent = " 0.00";
    return;
  }

  cartItemMap.style.display = "block";
  emptyImg.style.display = "none";

  let total = 0;

  cart.forEach(item => {
    total += item.total;

    // DOM tuzilmasini aynan sen bergan ko‘rinishda yaratamiz
    const div = document.createElement("div");
    div.className = "item-card-container";
    div.innerHTML = `
      <div class="img-cart-item">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="card-text-info-item">
        <p>${item.title}</p>
        <span>${item.description || ''}</span>
      </div>
      <div class="card-price-item">
        <p class="fs-18 text-red redflag" style="font-size:15px;">
          ${item.total.toFixed(2)}<b>₾</b>
        </p>
      </div>
    `;
    container.appendChild(div);
  });

  totalEl.textContent = " " + total.toFixed(2);
}

// LocalStorage saqlash va totalni hisoblash
function saveCart() {
  cart.forEach(item => {
    item.total = (item.aksiyaPrice || item.price) * item.count;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge(); // HAR SAFAR cart o'zganda badge yangilansin
  updateCartPopup(); // --- YANGI CHAQRUV: popupni yangilash ---
}

// Eski click handlerlarni tozalash
document.querySelectorAll(".jss41").forEach(btn => {
  btn.replaceWith(btn.cloneNode(true));
});

// Add to cart tugmasi bosilganda
document.querySelectorAll(".jss41").forEach(btn => {
  btn.addEventListener("click", function () {
    let product = this.closest(".product");

    // DOM dan narxlarni olish
    let originalPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
    let discountedPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

    // data-atributlarga yozib qo'yish
    product.dataset.price = originalPrice.toFixed(2);       // asl narx
    product.dataset.aksiyaPrice = discountedPrice.toFixed(2); // aksiya narx

    // keyin data-* dan olish
    let id = product.dataset.id;
    let img = product.dataset.img;
    let title = product.dataset.title;
    let description = product.dataset.description;
    let price = parseFloat(product.dataset.price);
    let aksiyaPrice = parseFloat(product.dataset.aksiyaPrice) || null;

    let existing = cart.find(item => item.id === id);

    if (!existing) {
      cart.push({
        id,
        img,
        title,
        description,
        price,               // asl narx
        aksiyaPrice,         // aksiya narx
        count: 1,
        total: aksiyaPrice ? aksiyaPrice : price
      });
      saveCart();

      this.style.display = "none";
      product.querySelector(".qty-container").style.display = "flex";
      updateQuantityUI(product, id);
    }
  });
});


// Mahsulot uchun plus/minus UI ni yangilash
function updateQuantityUI(product, id) {
  let cartItem = cart.find(item => item.id === id);
  if (!cartItem) return;

  let minusBtn = product.querySelector(".qty-minus");
  let plusBtn = product.querySelector(".qty-plus");
  let countEl = product.querySelector(".qty-count");
  let priceEl = product.querySelector(".for_price");

  countEl.textContent = cartItem.count;
  priceEl.innerHTML = cartItem.total.toFixed(2) + "<b>₾</b>";

  plusBtn.onclick = () => {
    cartItem.count += 1;
    saveCart();
    updateQuantityUI(product, id);
  };

  minusBtn.onclick = () => {
    cartItem.count -= 1;
    if (cartItem.count <= 0) {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      product.querySelector(".qty-container").style.display = "none";
      product.querySelector(".jss41").style.display = "inline-block";
      priceEl.innerHTML = (cartItem.aksiyaPrice || cartItem.price).toFixed(2) + "<b>₾</b>";
    } else {
      saveCart();
      updateQuantityUI(product, id);
    }
  };
}

// --- Sahifa yuklanganda UI tiklash + badge tiklash ---
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge(); // sahifa yangilanganda badge to‘g‘ri bo‘lsin
  updateCartPopup(); // --- YANGI CHAQRUV: sahifa yangilganda popup ham to‘g‘ri bo‘lsin

  document.querySelectorAll(".product").forEach(product => {
    let id = product.dataset.id;
    let cartItem = cart.find(item => item.id === id);

    if (cartItem && cartItem.count > 0) {
      product.querySelector(".jss41").style.display = "none";
      product.querySelector(".qty-container").style.display = "flex";
      updateQuantityUI(product, id);
    } else {
      product.querySelector(".jss41").style.display = "inline-block";
      product.querySelector(".qty-container").style.display = "none";
    }
  });
});


const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');

let hideTimeout;

// Icon ustiga kirganda popup ochiladi
cartIcon.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); // Agar yopilish kutyapti bo'lsa - bekor qilamiz
  cartPopup.style.display = 'flex';
});

// Icon ustidan chiqqanda - tekshirib turamiz
cartIcon.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    if (!cartPopup.matches(':hover')) {
      cartPopup.style.display = 'none';
    }
  }, 1500); // 200ms vaqt beramiz - foydalanuvchi popupga o'tib olishiga
});

// Popupdan chiqqanda ham yopamiz
cartPopup.addEventListener('mouseleave', () => {
  cartPopup.style.display = 'none';
});

// Popup ustiga kirganda - yopilish kutyapti bo'lsa, bekor qilamiz
cartPopup.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
});

}





(function () {
  document.addEventListener("DOMContentLoaded", () => {

    const getFavs = () => {
      try {
        const f = JSON.parse(localStorage.getItem("favorites") || "[]");
        return Array.isArray(f) ? f : [];
      } catch (_) { return []; }
    };

    const setFavs = (favs) => localStorage.setItem("favorites", JSON.stringify(favs));

    const isFav = (favs, id) => favs.some(x => x.id === id);

    function parseNum(v) {
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : null;
    }

    function updateFavoriteUI(product, on) {
      const checkbox = product.querySelector('input[type="checkbox"]');
      const emptyHeart = product.querySelector('[data-testid="FavoriteBorderIcon"]')?.closest('span');
      const filledHeartWrapper = product.querySelector('[data-testid="FavoriteIcon"]')?.closest('span.MuiTypography-root');

      if (checkbox) checkbox.checked = !!on;
      if (emptyHeart) emptyHeart.style.setProperty("display", on ? "none" : "inline-flex", "important");
      if (filledHeartWrapper) filledHeartWrapper.style.setProperty("display", on ? "inline-flex" : "none", "important");
    }

    // --- initial UI sync ---
    (function initialSync() {
      const favs = getFavs();
      document.querySelectorAll('.product').forEach(product => {
        const id = product?.dataset?.id;
        if (!id) return;
        updateFavoriteUI(product, isFav(favs, id));
      });
    })();

    // --- yurak toggle ---
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.MuiButtonBase-root.MuiCheckbox-root');
      if (!btn) return;

      const product = btn.closest('.product');
      if (!product) return;

      const id = product.dataset.id;
      let favs = getFavs();

      if (!isFav(favs, id)) {
        favs.push({
          id,
          img: product.dataset.img,
          title: product.dataset.title,
          description: product.dataset.description,
          price: parseNum(product.dataset.price),
          aksiyaPrice: parseNum(product.dataset.aksiyaPrice),
          count: 1,
          total: parseNum(product.dataset.aksiyaPrice) ?? parseNum(product.dataset.price)
        });
        setFavs(favs);
        updateFavoriteUI(product, true);
      } else {
        favs = favs.filter(x => x.id !== id);
        setFavs(favs);
        updateFavoriteUI(product, false);

        const container = document.getElementById('favorites-container');
        if (container && container.contains(product)) {
          const outer = product.closest('.jss32') || product;
          outer.remove();
        }

        // Agar favorites sahifasida bo‘lsa va favorites bo‘sh qolsa, sahifani yangilash
        if (window.location.pathname === '/favoritess/' && favs.length === 0) {
          location.reload();
        }
      }
    });

    // --- mutation observer bilan dinamik qo‘shilgan productlar uchun sync ---
    const observer = new MutationObserver(() => {
      const favs = getFavs();
      document.querySelectorAll('.product').forEach(product => {
        const id = product?.dataset?.id;
        if (!id) return;
        updateFavoriteUI(product, isFav(favs, id));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
