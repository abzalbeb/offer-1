if (window.matchMedia("(max-width: 900px)").matches) {
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// Badge yangilash (cart va orders soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCartMobile");

    // Cart va orders itemlarining umumiy soni
    const totalCount = cart.length + orders.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex";
    } else {
        countCart.style.display = "none";
    }

    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Cart popup ni yangilash (cart + orders)
function updateCartPopup() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const container = document.querySelector(".item-card-container");
    const cartItemMap = document.querySelector(".cart-item-map-container");
    const emptyImg = document.querySelector(".cart-popup-img");
    const totalEl = document.querySelector(".cart-total .redflag");


    if (!container || !cartItemMap || !emptyImg || !totalEl) return;

    container.innerHTML = ""; // eski elementlarni tozalash

    const allItems = [...cart, ...orders];

    if (allItems.length === 0) {
        cartItemMap.style.display = "none";
        emptyImg.style.display = "flex";
        totalEl.textContent = " 0.00";
        return;
    }

    cartItemMap.style.display = "block";
    emptyImg.style.display = "none";

    let total = 0;

    // Avval cart itemlarini qo'shish
    cart.forEach(item => {
        const itemTotal = item.total || 0;
        total += itemTotal;

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
                    ${itemTotal.toFixed(2)}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Keyin orders itemlarini qo'shish
    orders.forEach(item => {
        // Orders strukturasi boshqacha bo'lgani uchun
        let itemTotal = 0;
        if (item.totalPrice) {
            // "55.80₾" formatidan raqamni olish
            itemTotal = parseFloat(item.totalPrice.replace(/[^\d.]/g, '')) || 0;
        } else if (item.aksiyaPrice) {
            itemTotal = item.aksiyaPrice * (item.quantity || 1);
        } else if (item.price) {
            itemTotal = item.price * (item.quantity || 1);
        }

        total += itemTotal;

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
                    ${itemTotal.toFixed(2)}<b>₾</b>
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
    updateCartBadge();
    updateCartPopup();
}

// Orders saqlash
function saveOrders() {
    // Orders strukturasi cart dan farqli bo'lgani uchun hech narsa qilmaymiz
    localStorage.setItem("orders", JSON.stringify(orders));
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Orders ga item qo'shish
function addToOrders(item) {
    const orderItem = {
        ...item,
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    orders.push(orderItem);
    saveOrders();
}

// Cart dan orders ga ko'chirish
function moveCartToOrders() {
    if (cart.length === 0) {
        alert('Savatingiz bo\'sh!');
        return;
    }

    cart.forEach(item => {
        addToOrders(item);
    });
    
    // Cart ni tozalash
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // UI ni yangilash
    document.querySelectorAll(".product").forEach(product => {
        const id = product.dataset.id;
        const cartItem = cart.find(item => item.id === id);
        
        if (!cartItem) {
            product.querySelector(".jss41").style.display = "inline-block";
            product.querySelector(".qty-container").style.display = "none";
            
            
            // Narxni qayta tiklash
            const priceEl = product.querySelector(".product-price");
            const aksiyaPrice = parseFloat(product.dataset.price);
            const price = parseFloat(product.dataset.aksiyaPrice) || null;
            priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b></b>";
        }
    });
    
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
    
    alert("Buyurtma muvaffaqiyatli berildi!");
}

// Eski click handlerlarni tozalash
document.querySelectorAll(".jss41").forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
});

// MOBILE: Add to cart tugmasi bosilganda - TUZATILGAN
document.querySelectorAll(".jss41").forEach(btn => {
    btn.addEventListener("click", function () {
        let product = this.closest(".product");

        // Agar dataset da narxlar mavjud bo'lmasa, faqat o'shanda DOM dan o'qiymiz
        if (!product.dataset.price || !product.dataset.aksiyaPrice) {
            // DOM dan narxlarni olish (faqat birinchi marta)
            let originalPrice = parseFloat(product.querySelector(".for_price").textContent.trim()) || 0;
            let discountedPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim()) || null;

            // dataset ga saqlash
            product.dataset.price = originalPrice.toFixed(2);
            product.dataset.aksiyaPrice = discountedPrice ? discountedPrice.toFixed(2) : "";
        }

        // Dataset dan olish
        let id = product.dataset.id;
        let img = product.dataset.img;
        let title = product.dataset.title;
        let description = product.dataset.description;
        let price = parseFloat(product.dataset.price);
        let aksiyaPrice = product.dataset.aksiyaPrice ? parseFloat(product.dataset.aksiyaPrice) : null;

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

            this.style.display = "none";
            product.querySelector(".qty-container").style.display = "flex";

            // TUZATISH: for_price ga price (asl narx) qo'yish
            let priceEl = product.querySelector(".for_price");
            priceEl.innerHTML = price.toFixed(2) + "<b></b>";

            // Aksiya narxi uchun for_aksiyaPrice
            if (aksiyaPrice) {
                product.querySelector(".for_aksiyaPrice").innerHTML = aksiyaPrice.toFixed(2) + "<b>₾</b>";
            } else {
                product.querySelector(".for_aksiyaPrice").innerHTML = "";
            }

            updateQuantityUI(product, id);
        }
    });
});

// MOBILE: Mahsulot uchun plus/minus UI ni yangilash - TUZATILGAN
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");
    let priceEl = product.querySelector(".for_price");  // Bu yerda price (asl narx) chiqadi
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Bu yerda aksiya narx chiqadi

    countEl.textContent = cartItem.count;
    
    // TUZATISH: for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    priceEl.innerHTML = totalPrice.toFixed(2) + "<b>₾</b>";
    
    // Aksiya narxi uchun
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        let totalAksiya = cartItem.aksiyaPrice * cartItem.count;
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

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
            
            // TUZATISH: minus bosganda default narxlarni qaytarish
            priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
            if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
            }
        } else {
            saveCart();
            updateQuantityUI(product, id);
        }
    };
}

// Sahifa yuklanganda UI tiklash
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateCartPopup();

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

// Cart popup mouse events
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');

let hideTimeout;

// Icon ustiga kirganda popup ochiladi
cartIcon.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    cartPopup.style.display = 'flex';
});

// Icon ustidan chiqqanda - tekshirib turamiz
cartIcon.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        if (!cartPopup.matches(':hover')) {
            cartPopup.style.display = 'none';
        }
    }, 1500);
});

// Popupdan chiqqanda ham yopamiz
cartPopup.addEventListener('mouseleave', () => {
    cartPopup.style.display = 'none';
});

// Popup ustiga kirganda - yopilish kutyapti bo'lsa, bekor qilamiz
cartPopup.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

// Buyurtma berish tugmasi uchun event listener
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});



// Orders ni tozalash funksiyasi (test uchun)
function clearOrders() {
    localStorage.removeItem("orders");
    orders = [];
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Global funksiya - boshqa fayllardan chaqirish uchun
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};

// Orders o'zgarganida cart ni yangilash uchun localStorage eventini tinglash
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

}else{

// DESKTOP VERSIYA

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// Badge yangilash (cart va orders soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCart");

    // Cart va orders itemlarining umumiy soni
    const totalCount = cart.length + orders.length;

    countCart.textContent = totalCount;

    if (totalCount > 0) {
        countCart.style.display = "flex";
    } else {
        countCart.style.display = "none";
    }

    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Cart popup ni yangilash (cart + orders)
function updateCartPopup() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const container = document.querySelector(".item-card-container");
    const cartItemMap = document.querySelector(".cart-item-map-container");
    const emptyImg = document.querySelector(".cart-popup-img");
    const totalEl = document.querySelector(".cart-total .redflag");


    if (!container || !cartItemMap || !emptyImg || !totalEl) return;

    container.innerHTML = ""; // eski elementlarni tozalash

    const allItems = [...cart, ...orders];

    if (allItems.length === 0) {
        cartItemMap.style.display = "none";
        emptyImg.style.display = "flex";
        totalEl.textContent = " 0.00";
        return;
    }

    cartItemMap.style.display = "block";
    emptyImg.style.display = "none";

    let total = 0;

    // Avval cart itemlarini qo'shish
    cart.forEach(item => {
        const itemTotal = item.total || 0;
        total += itemTotal;

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
                    ${itemTotal.toFixed(2)}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Keyin orders itemlarini qo'shish
    orders.forEach(item => {
        // Orders strukturasi boshqacha bo'lgani uchun
        let itemTotal = 0;
        if (item.totalPrice) {
            // "55.80₾" formatidan raqamni olish
            itemTotal = parseFloat(item.totalPrice.replace(/[^\d.]/g, '')) || 0;
        } else if (item.aksiyaPrice) {
            itemTotal = item.aksiyaPrice * (item.quantity || 1);
        } else if (item.price) {
            itemTotal = item.price * (item.quantity || 1);
        }

        total += itemTotal;

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
                    ${itemTotal.toFixed(2)}<b>₾</b>
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
    updateCartBadge();
    updateCartPopup();
}

// Orders saqlash
function saveOrders() {
    // Orders strukturasi cart dan farqli bo'lgani uchun hech narsa qilmaymiz
    localStorage.setItem("orders", JSON.stringify(orders));
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Orders ga item qo'shish
function addToOrders(item) {
    const orderItem = {
        ...item,
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    orders.push(orderItem);
    saveOrders();
}

// Cart dan orders ga ko'chirish
function moveCartToOrders() {
    if (cart.length === 0) {
        alert('Savatingiz bo\'sh!');
        return;
    }

    cart.forEach(item => {
        addToOrders(item);
    });
    
    // Cart ni tozalash
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // UI ni yangilash
    document.querySelectorAll(".product").forEach(product => {
        const id = product.dataset.id;
        const cartItem = cart.find(item => item.id === id);
        
        if (!cartItem) {
            product.querySelector(".jss41").style.display = "inline-block";
            product.querySelector(".qty-container").style.display = "none";
            
            // Narxni qayta tiklash
            const priceEl = product.querySelector(".product-price");
            const aksiyaPrice = parseFloat(product.dataset.price);
            const price = parseFloat(product.dataset.aksiyaPrice) || null;
            priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b>₾</b>";
        }
    });
    
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
    
    alert("Buyurtma muvaffaqiyatli berildi!");
}

// Eski click handlerlarni tozalash
document.querySelectorAll(".jss41").forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
});

// DESKTOP: Add to cart tugmasi bosilganda - TUZATILGAN
document.querySelectorAll(".jss41").forEach(btn => {
    btn.addEventListener("click", function () {
        let product = this.closest(".product");

        // Agar dataset da narxlar mavjud bo'lmasa, faqat o'shanda DOM dan o'qiymiz
        if (!product.dataset.price || !product.dataset.aksiyaPrice) {
            // DOM dan narxlarni olish (faqat birinchi marta)
            let originalPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
            let discountedPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

            // data-atributlarga saqlash
            product.dataset.price = originalPrice.toFixed(2);       // asl narx
            product.dataset.aksiyaPrice = discountedPrice.toFixed(2); // aksiya narx
        }

        // Dataset dan olish
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
            
            // TUZATISH: for_price ga price (asl narx) qo'yish
            let priceEl = product.querySelector(".for_price");
            priceEl.innerHTML = price.toFixed(2) + "<b></b>";
            
            updateQuantityUI(product, id);
        }
    });
});

// DESKTOP: Mahsulot uchun plus/minus UI ni yangilash - TUZATILGAN
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");

    // ikkita price elementini olish
    let priceEl = product.querySelector(".for_price");           // Bu yerda price (asl narx) chiqadi
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Bu yerda aksiya narx chiqadi

    countEl.textContent = cartItem.count;

    // TUZATISH: for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    let totalAksiya = (cartItem.aksiyaPrice || cartItem.price) * cartItem.count;

    // for_price ga price (asl narx) ni qo'yish
    priceEl.innerHTML = totalPrice.toFixed(2) + "<b>₾</b>";
    
    // for_aksiyaPrice ga aksiya narxini qo'yish
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

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

            // TUZATISH: minus bosganda default narxlarni qaytarish
            priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
            if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
            }
        } else {
            saveCart();
            updateQuantityUI(product, id);
        }
    };
}

// Sahifa yuklanganda UI tiklash
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateCartPopup();

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

// Cart popup mouse events
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');

let hideTimeout;

// Icon ustiga kirganda popup ochiladi
cartIcon.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    cartPopup.style.display = 'flex';
});

// Icon ustidan chiqqanda - tekshirib turamiz
cartIcon.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        if (!cartPopup.matches(':hover')) {
            cartPopup.style.display = 'none';
        }
    }, 1500);
});

// Popupdan chiqqanda ham yopamiz
cartPopup.addEventListener('mouseleave', () => {
    cartPopup.style.display = 'none';
});

// Popup ustiga kirganda - yopilish kutyapti bo'lsa, bekor qilamiz
cartPopup.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

// Buyurtma berish tugmasi uchun event listener
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});

// Orders ni ko'rish uchun funksiya (console da test qilish uchun)


// Orders ni tozalash funksiyasi (test uchun)
function clearOrders() {
    localStorage.removeItem("orders");
    orders = [];
    updateCartBadge();
    updateCartPopup();
    
    // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
    if (typeof loadAndRenderOrders === 'function') {
        loadAndRenderOrders();
    }
}

// Global funksiya - boshqa fayllardan chaqirish uchun
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};

// Orders o'zgarganida cart ni yangilash uchun localStorage eventini tinglash
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

}

document.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (img) {
    const style = window.getComputedStyle(img);
    if (
      style.height === "38px" &&
      style.width === "38px" &&
      style.objectFit === "contain"
    ) {
      window.location.href = "../stores/";
    }
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const capa = document.getElementById("Layer_1");
  if (capa) {
    capa.addEventListener("click", () => {
      window.location.href = "../";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const geDivs = document.querySelectorAll('.lang_Ge');

    geDivs.forEach(div => {
        const img = div.querySelector('img');
        if (img && img.getAttribute('src') === '../assets/image/usa-flag-round-circle-design-shape-united-state-america-flag_1091279-1016-removebg-preview.png') {
            div.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const oldUrl = 'https://dominospizza.ge/static/media/empty_cart.ce51a99a8179668c0c85.png';
  const newUrl = '../assets/image/empty_cart.ce51a99a8179668c0c85.png';

  // Sahifadagi barcha <img> elementlarni tekshiramiz
  document.querySelectorAll('img').forEach(img => {
    if (img.src === oldUrl) {
      img.src = newUrl;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-cart-btn1").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});
document.addEventListener("click", (e) => {
  const badge = e.target.closest(".MuiBadge-root.css-1rzb3uu");
  if (badge) {
    window.location.href = "../cart/";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const capa = document.getElementById("Capa_1");
  if (capa) {
    capa.addEventListener("click", () => {
      window.location.href = "../tracking/";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    if (img.src === "https://dominospizza.ge/static/media/shop-white.f9932044a442888258cf4888ce686068.svg") {
      img.src = "../assets/image/bike-white.c750e44adb7ca082feca9c0ac6e6bd23.svg";
    }
  });
});