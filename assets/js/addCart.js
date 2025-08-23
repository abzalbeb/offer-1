if (window.matchMedia("(max-width: 900px)").matches) {


let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// ===================
// TRANSLATION SYSTEM
// ===================

// Hozirgi tilni aniqlash funksiyasi
function getCurrentLanguage() {
    // URL dan tilni aniqlash
    const path = window.location.pathname;
    
    // Geo til - /geo/ bilan boshlanadi yoki ichida /geo/ bor
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';
    
    // Eng til - http://127.0.0.1:5500/ (root path yoki / bilan tugaydi)
    if (path === '/' || path === '' || path === '/index.html') return 'en';
    
    // Default eng tili
    return 'en';
}

// Mahsulot ma'lumotlarini yangi tilga tarjima qilish
function translateProductData(productId, newLanguage) {
    // Sahifada mavjud mahsulotlardan yangi tildagi ma'lumotlarni olish
    const productElement = document.querySelector(`[data-id="${productId}"]`);
    
    if (!productElement) {
        // Agar sahifada mahsulot yo'q bo'lsa, localStorage dan olishga harakat qilish
        return null;
    }

    return {
        id: productId,
        img: productElement.dataset.img,
        title: productElement.dataset.title,
        description: productElement.dataset.description,
        price: parseFloat(productElement.dataset.price),
        aksiyaPrice: parseFloat(productElement.dataset.aksiyaPrice) || null
    };
}

// Cart va Orders ni yangi tilga tarjima qilish
function translateCartItems() {
    const currentLang = getCurrentLanguage();
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    let updated = false;

    // Cart itemlarini yangilash
    cart.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            // Faqat tarjima kerak bo'lgan maydonlarni yangilash
            cart[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Orders itemlarini yangilash
    orders.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            orders[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Agar o'zgarish bo'lgan bo'lsa, localStorage ga saqlash
    if (updated) {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("orders", JSON.stringify(orders));
        
        // Global o'zgaruvchilarni ham yangilash
        window.cart = cart;
        window.orders = orders;
        
        // UI ni yangilash
        updateCartBadge();
        updateCartPopup();
        
        // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
        if (typeof loadAndRenderOrders === 'function') {
            loadAndRenderOrders();
        }
        
    }
}

// ===================
// CART FUNCTIONS
// ===================

// Badge yangilash (cart va orders soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCartMobile");

    if (!countCart) return;

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
        const itemTotal = item.price || 0;
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
                    ${item.price*item.count}<b></b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Keyin orders itemlarini qo'shish
    orders.forEach(item => {
        // Orders strukturasi boshqacha bo'lgani uchun
        let itemTotal = 0;
         if (item.price) {
            itemTotal = item.price * (item.count);
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
                    ${item.price*(item.count)}<b>₾</b>
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
        count: item.count, // quantity maydonini qo'shish
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
            if (priceEl) {
                const aksiyaPrice = parseFloat(product.dataset.price);
                const price = parseFloat(product.dataset.aksiyaPrice) || null;
                priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b>₾</b>";
            }
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

// ===================
// EVENT HANDLERS
// ===================

// Eski click handlerlarni tozalash
function clearOldHandlers() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

// Add to cart tugmasi bosilganda
function initAddToCartButtons() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.addEventListener("click", function () {
            let product = this.closest(".product");

            // Agar dataset da narxlar mavjud bo'lmasa, faqat o'shanda DOM dan o'qiymiz
            if (!product.dataset.price || !product.dataset.aksiyaPrice) {
                // DOM dan narxlarni olish (faqat birinchi marta)
                let discountedPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
                let originalPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

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
                
                // Desktop da for_price ga asl narx, for_aksiyaPrice ga aksiya narxi
                let priceEl = product.querySelector(".for_price");
                let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice");
                
                if (priceEl) {
                    priceEl.innerHTML = price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = aksiyaPrice.toFixed(2) + "<b></b>";
                }
                
                updateQuantityUI(product, id);
            }
        });
    });
}

// Mahsulot uchun plus/minus UI ni yangilash
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");

    // ikkita price elementini olish
    let priceEl = product.querySelector(".for_price");           // Bu yerda price (asl narx) chiqadi
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Bu yerda aksiya narx chiqadi

    if (countEl) countEl.textContent = cartItem.count;

    // for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    let totalAksiya = (cartItem.aksiyaPrice || cartItem.price) * cartItem.count;

    // for_price ga price (asl narx) ni qo'yish
    if (priceEl) {
        priceEl.innerHTML = totalPrice.toFixed(2) + "<b></b>";
    }
    
    // for_aksiyaPrice ga aksiya narxini qo'yish
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

    if (plusBtn) {
        plusBtn.onclick = () => {
            cartItem.count += 1;
            saveCart();
            updateQuantityUI(product, id);
        };
    }

    if (minusBtn) {
        minusBtn.onclick = () => {
            cartItem.count -= 1;
            if (cartItem.count <= 0) {
                cart = cart.filter(item => item.id !== id);
                saveCart();
                
                const qtyContainer = product.querySelector(".qty-container");
                const addBtn = product.querySelector(".jss41");
                
                if (qtyContainer) qtyContainer.style.display = "none";
                if (addBtn) addBtn.style.display = "inline-block";

                // minus bosganda default narxlarni qaytarish
                if (priceEl) {
                    priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
                }
            } else {
                saveCart();
                updateQuantityUI(product, id);
            }
        };
    }
}

// ===================
// POPUP EVENTS
// ===================

// Cart popup mouse events
function initCartPopupEvents() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');

    if (!cartIcon || !cartPopup) return;

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
}

// ===================
// INITIALIZATION
// ===================

// Sahifa yuklanganda tarjima sistemasini ishga tushirish
function initTranslationSystem() {
    // Sahifa to'liq yuklangach tarjimani tekshirish
    setTimeout(translateCartItems, 100);
    
    // URL o'zgarganida ham tekshirish (SPA uchun)
    let currentUrl = window.location.href;
    setInterval(() => {
        if (currentUrl !== window.location.href) {
            currentUrl = window.location.href;
            setTimeout(translateCartItems, 100);
        }
    }, 500);
}

// Sahifa yuklanganda UI tiklash
function initializeCartSystem() {
    // Avval tarjima qilish
    setTimeout(translateCartItems, 50);
    
    updateCartBadge();
    updateCartPopup();

    // Clear old handlers va yangi handlerlarni qo'shish
    clearOldHandlers();
    initAddToCartButtons();
    initCartPopupEvents();

    // UI ni tiklash
    document.querySelectorAll(".product").forEach(product => {
        let id = product.dataset.id;
        let cartItem = cart.find(item => item.id === id);

        if (cartItem && cartItem.count > 0) {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "none";
            if (qtyContainer) qtyContainer.style.display = "flex";
            
            updateQuantityUI(product, id);
        } else {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "inline-block";
            if (qtyContainer) qtyContainer.style.display = "none";
        }
    });
}

// ===================
// EVENT LISTENERS
// ===================

// DOM yuklanganda
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initTranslationSystem();
        initializeCartSystem();
    });
} else {
    initTranslationSystem();
    initializeCartSystem();
}

// Buyurtma berish tugmasi uchun event listener
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});

// Til o'zgarganda ishlaydigan event listener
window.addEventListener('languageChanged', translateCartItems);

// Page visibility API bilan sahifa ko'ringanida tekshirish
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setTimeout(translateCartItems, 100);
    }
});

// Hash o'zgarganida ham tekshirish
window.addEventListener('hashchange', function() {
    setTimeout(translateCartItems, 100);
});

// Popstate event (browser back/forward tugmalari)
window.addEventListener('popstate', function() {
    setTimeout(translateCartItems, 100);
});

// Orders o'zgarganida cart ni yangilash uchun localStorage eventini tinglash
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

// ===================
// UTILITY FUNCTIONS
// ===================

// Orders ni ko'rish uchun funksiya (console da test qilish uchun)
function viewOrders() {
}

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

// Manual tarjima qilish uchun global funksiya
window.forceTranslateCart = function() {
    translateCartItems();
};

// Global funksiya - boshqa fayllardan chaqirish uchun
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};







}else{

// COMPLETE DESKTOP CART SYSTEM WITH TRANSLATION

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

// ===================
// TRANSLATION SYSTEM
// ===================

// Hozirgi tilni aniqlash funksiyasi
function getCurrentLanguage() {
    // URL dan tilni aniqlash
    const path = window.location.pathname;
    
    // Geo til - /geo/ bilan boshlanadi yoki ichida /geo/ bor
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';
    
    // Eng til - http://127.0.0.1:5500/ (root path yoki / bilan tugaydi)
    if (path === '/' || path === '' || path === '/index.html') return 'en';
    
    // Default eng tili
    return 'en';
}

// Mahsulot ma'lumotlarini yangi tilga tarjima qilish
function translateProductData(productId, newLanguage) {
    // Sahifada mavjud mahsulotlardan yangi tildagi ma'lumotlarni olish
    const productElement = document.querySelector(`[data-id="${productId}"]`);
    
    if (!productElement) {
        // Agar sahifada mahsulot yo'q bo'lsa, localStorage dan olishga harakat qilish
        return null;
    }

    return {
        id: productId,
        img: productElement.dataset.img,
        title: productElement.dataset.title,
        description: productElement.dataset.description,
        price: parseFloat(productElement.dataset.price),
        aksiyaPrice: parseFloat(productElement.dataset.aksiyaPrice) || null
    };
}

// Cart va Orders ni yangi tilga tarjima qilish
function translateCartItems() {
    const currentLang = getCurrentLanguage();
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    let updated = false;

    // Cart itemlarini yangilash
    cart.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            // Faqat tarjima kerak bo'lgan maydonlarni yangilash
            cart[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Orders itemlarini yangilash
    orders.forEach((item, index) => {
        const translatedData = translateProductData(item.id, currentLang);
        if (translatedData && 
            (translatedData.title !== item.title || 
             translatedData.description !== item.description ||
             translatedData.img !== item.img)) {
            
            orders[index] = {
                ...item,
                img: translatedData.img,
                title: translatedData.title,
                description: translatedData.description,
                price: translatedData.price,
                aksiyaPrice: translatedData.aksiyaPrice
            };
            updated = true;
        }
    });

    // Agar o'zgarish bo'lgan bo'lsa, localStorage ga saqlash
    if (updated) {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("orders", JSON.stringify(orders));
        
        // Global o'zgaruvchilarni ham yangilash
        window.cart = cart;
        window.orders = orders;
        
        // UI ni yangilash
        updateCartBadge();
        updateCartPopup();
        
        // addCART.js dagi funksiyani ham chaqirish (agar mavjud bo'lsa)
        if (typeof loadAndRenderOrders === 'function') {
            loadAndRenderOrders();
        }
        
    }
}

// ===================
// CART FUNCTIONS
// ===================

// Badge yangilash (cart va orders soni)
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const countCart = document.querySelector(".countCart");

    if (!countCart) return;

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
        const itemTotal = item.price*item.count;
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
                    ${item.price*item.count}<b>₾</b>
                </p>
            </div>
        `;
        container.appendChild(div);
    });

    // Keyin orders itemlarini qo'shish
    orders.forEach(item => {
        // Orders strukturasi boshqacha bo'lgani uchun
        let itemTotal = 0;
         if (item.price) {
            itemTotal = item.price * (item.count);
            
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
                    ${item.price*(item.count)}<b>₾</b>
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
        count: item.count, // quantity maydonini qo'shish
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
            if (priceEl) {
                const aksiyaPrice = parseFloat(product.dataset.price);
                const price = parseFloat(product.dataset.aksiyaPrice) || null;
                priceEl.innerHTML = (aksiyaPrice || price).toFixed(2) + "<b>₾</b>";
            }
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

// ===================
// EVENT HANDLERS
// ===================

// Eski click handlerlarni tozalash
function clearOldHandlers() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

// Add to cart tugmasi bosilganda
function initAddToCartButtons() {
    document.querySelectorAll(".jss41").forEach(btn => {
        btn.addEventListener("click", function () {
            let product = this.closest(".product");

            // Agar dataset da narxlar mavjud bo'lmasa, faqat o'shanda DOM dan o'qiymiz
            if (!product.dataset.price || !product.dataset.aksiyaPrice) {
                // DOM dan narxlarni olish (faqat birinchi marta)
                let discountedPrice = parseFloat(product.querySelector(".for_aksiyaPrice").textContent.trim());
                let originalPrice = parseFloat(product.querySelector(".for_price").textContent.trim());

                // data-atributlarga saqlash
                product.dataset.aksiyaPrice = originalPrice.toFixed(2);       // asl narx
                product.dataset.price = discountedPrice.toFixed(2); // aksiya narx
            }

            // Dataset dan olish
            let id = product.dataset.id;
            let img = product.dataset.img;
            let title = product.dataset.title;
            let description = product.dataset.description;
            let for_favorite=  true;
            let aksiyaPrice = parseFloat(product.dataset.price);
            let price = parseFloat(product.dataset.aksiyaPrice) || null;

            let existing = cart.find(item => item.id === id);

            if (!existing) {
                cart.push({
                    id,
                    img,
                    title,
                    description,
                    price,               // asl narx
                    aksiyaPrice,   
                    for_favorite,      // aksiya narx
                    count: 1,
                    total: aksiyaPrice ? aksiyaPrice : price
                });
                saveCart();

                this.style.display = "none";
                product.querySelector(".qty-container").style.display = "flex";
                
                // Desktop da for_price ga asl narx, for_aksiyaPrice ga aksiya narxi
                let priceEl = product.querySelector(".for_price");
                let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice");
                
                if (priceEl) {
                    priceEl.innerHTML = price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = aksiyaPrice.toFixed(2) + "<b></b>";
                }
                
                updateQuantityUI(product, id);
            }
        });
    });
}

// Mahsulot uchun plus/minus UI ni yangilash
function updateQuantityUI(product, id) {
    let cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    let minusBtn = product.querySelector(".qty-minus");
    let plusBtn = product.querySelector(".qty-plus");
    let countEl = product.querySelector(".qty-count");

    // ikkita price elementini olish
    let priceEl = product.querySelector(".for_price");           // Bu yerda price (asl narx) chiqadi
    let aksiyaPriceEl = product.querySelector(".for_aksiyaPrice"); // Bu yerda aksiya narx chiqadi

    if (countEl) countEl.textContent = cartItem.count;

    // for_price ga faqat price (asl narx) * count
    let totalPrice = cartItem.price * cartItem.count;
    let totalAksiya = (cartItem.aksiyaPrice || cartItem.price) * cartItem.count;

    // for_price ga price (asl narx) ni qo'yish
    if (priceEl) {
        priceEl.innerHTML = totalPrice.toFixed(2) + "<b>₾</b>";
    }
    
    // for_aksiyaPrice ga aksiya narxini qo'yish
    if (aksiyaPriceEl && cartItem.aksiyaPrice) {
        aksiyaPriceEl.innerHTML = totalAksiya.toFixed(2) + "<b></b>";
    }

    if (plusBtn) {
        plusBtn.onclick = () => {
            cartItem.count += 1;
            saveCart();
            updateQuantityUI(product, id);
        };
    }

    if (minusBtn) {
        minusBtn.onclick = () => {
            cartItem.count -= 1;
            if (cartItem.count <= 0) {
                cart = cart.filter(item => item.id !== id);
                saveCart();
                
                const qtyContainer = product.querySelector(".qty-container");
                const addBtn = product.querySelector(".jss41");
                
                if (qtyContainer) qtyContainer.style.display = "none";
                if (addBtn) addBtn.style.display = "inline-block";

                // minus bosganda default narxlarni qaytarish
                if (priceEl) {
                    priceEl.innerHTML = cartItem.price.toFixed(2) + "<b>₾</b>";
                }
                if (aksiyaPriceEl && cartItem.aksiyaPrice) {
                    aksiyaPriceEl.innerHTML = cartItem.aksiyaPrice.toFixed(2) + "<b></b>";
                }
            } else {
                saveCart();
                updateQuantityUI(product, id);
            }
        };
    }
}

// ===================
// POPUP EVENTS
// ===================

// Cart popup mouse events
function initCartPopupEvents() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartPopup = document.querySelector('.cart-popup');

    if (!cartIcon || !cartPopup) return;

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
}

// ===================
// INITIALIZATION
// ===================

// Sahifa yuklanganda tarjima sistemasini ishga tushirish
function initTranslationSystem() {
    // Sahifa to'liq yuklangach tarjimani tekshirish
    setTimeout(translateCartItems, 100);
    
    // URL o'zgarganida ham tekshirish (SPA uchun)
    let currentUrl = window.location.href;
    setInterval(() => {
        if (currentUrl !== window.location.href) {
            currentUrl = window.location.href;
            setTimeout(translateCartItems, 100);
        }
    }, 500);
}

// Sahifa yuklanganda UI tiklash
function initializeCartSystem() {
    // Avval tarjima qilish
    setTimeout(translateCartItems, 50);
    
    updateCartBadge();
    updateCartPopup();

    // Clear old handlers va yangi handlerlarni qo'shish
    clearOldHandlers();
    initAddToCartButtons();
    initCartPopupEvents();

    // UI ni tiklash
    document.querySelectorAll(".product").forEach(product => {
        let id = product.dataset.id;
        let cartItem = cart.find(item => item.id === id);

        if (cartItem && cartItem.count > 0) {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "none";
            if (qtyContainer) qtyContainer.style.display = "flex";
            
            updateQuantityUI(product, id);
        } else {
            const addBtn = product.querySelector(".jss41");
            const qtyContainer = product.querySelector(".qty-container");
            
            if (addBtn) addBtn.style.display = "inline-block";
            if (qtyContainer) qtyContainer.style.display = "none";
        }
    });
}

// ===================
// EVENT LISTENERS
// ===================

// DOM yuklanganda
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initTranslationSystem();
        initializeCartSystem();
    });
} else {
    initTranslationSystem();
    initializeCartSystem();
}

// Buyurtma berish tugmasi uchun event listener
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        moveCartToOrders();
    }
});

// Til o'zgarganda ishlaydigan event listener
window.addEventListener('languageChanged', translateCartItems);

// Page visibility API bilan sahifa ko'ringanida tekshirish
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setTimeout(translateCartItems, 100);
    }
});

// Hash o'zgarganida ham tekshirish
window.addEventListener('hashchange', function() {
    setTimeout(translateCartItems, 100);
});

// Popstate event (browser back/forward tugmalari)
window.addEventListener('popstate', function() {
    setTimeout(translateCartItems, 100);
});

// Orders o'zgarganida cart ni yangilash uchun localStorage eventini tinglash
window.addEventListener('storage', function(e) {
    if (e.key === 'orders') {
        updateCartBadge();
        updateCartPopup();
    }
});

// ===================
// UTILITY FUNCTIONS
// ===================

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

// Manual tarjima qilish uchun global funksiya
window.forceTranslateCart = function() {
    translateCartItems();
};

// Global funksiya - boshqa fayllardan chaqirish uchun
window.updateCartFromOrders = function() {
    updateCartBadge();
    updateCartPopup();
};

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
          type: product.dataset.type || '',
          img_1: product.dataset.img_1 || '',
          Ingredients: product.dataset.ingredients || '',
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
        if (window.location.pathname === './favoritess/' && favs.length === 0) {
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


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-cart-btn1").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../cart/";
    });
  });
});