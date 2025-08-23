// -----------------------------
// PATH-BASED LANGUAGE DETECTOR
// -----------------------------
function getCurrentLanguage() {
    // URL dan tilni aniqlash
    const path = window.location.pathname || '';

    // Geo til - /geo/ bilan boshlanadi yoki ichida /geo/ bor
    if (path.includes('/geo/') || path.startsWith('/geo')) return 'geo';

    // Eng til - root yoki index.html
    if (path === '/' || path === '' || path === '/index.html') return 'en';

    // Default eng tili
    return 'en';
}
window.getCurrentLanguage = getCurrentLanguage; // for testing in console

// -----------------------------
// MyMemory-based translate function (replaces previous LibreTranslate usage)
// Uses: https://api.mymemory.translated.net/get?q=...&langpair=... 
// -----------------------------
async function translateTextLibre(text, targetLang) {
    if (!text || !String(text).trim()) return text;

    const langpair = (targetLang === 'geo') ? 'en|ka' : 'ka|en';
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('[translateText] MyMemory API non-OK', res.status);
            return text;
        }
        const j = await res.json();
        let translated = (j && j.responseData && j.responseData.translatedText) 
            ? j.responseData.translatedText 
            : null;

        if (!translated && Array.isArray(j.matches) && j.matches.length > 0) {
            translated = j.matches[0].translation || j.matches[0].translationText || null;
        }
        if (!translated) return text;

        // HTML entitylarni ochirish
        translated = translated.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

        // Agar javobda ruscha harflar bo‘lsa — tarjimani bekor qilish
        if (/[а-яё]/i.test(translated)) {
            console.warn('[translateText] Skipped non-English/Georgian translation:', translated);
            return text; 
        }
        return translated;
    } catch (err) {
        console.error('[translateText] MyMemory request failed:', err);
        return text;
    }
}


// -----------------------------
// TRANSLATE STORAGE BY PATH (uses translateTextLibre -> MyMemory)
// -----------------------------
async function translateStorageUsingLibre() {
    try {
        const targetLang = getCurrentLanguage();
        console.log('[translateStorage] targetLang =', targetLang);

        // read current storage using helper funcs defined later (they exist)
        const orders = (typeof getOrdersFromLocalStorage === 'function') ? getOrdersFromLocalStorage() : JSON.parse(localStorage.getItem('orders') || '[]');
        const cart = (typeof getCartFromLocalStorage === 'function') ? getCartFromLocalStorage() : JSON.parse(localStorage.getItem('cart') || '[]');

        // gather texts (deduped)
        const tasks = []; // {type, idx, field, text, pizzaIdx?}
        const uniqMap = new Map(); // text -> index in uniqTexts

        function pushText(type, idx, field, text, pizzaIdx) {
            if (!text || !String(text).trim()) return;
            const t = String(text);
            if (!uniqMap.has(t)) uniqMap.set(t, uniqMap.size);
            tasks.push({ type, idx, field, text: t, pizzaIdx });
        }

        orders.forEach((o, i) => {
            if (o && o.title) pushText('order', i, 'title', o.title);
            if (o && o.description) pushText('order', i, 'description', o.description);

            if (Array.isArray(o.pizzas)) {
                o.pizzas.forEach((p, pi) => {
                    if (p && p.title) pushText('order-pizza', i, 'title', p.title, pi);
                    if (p && p.description) pushText('order-pizza', i, 'description', p.description, pi);

                    // INGREDIENTLAR
                    if (Array.isArray(p.ingredients)) {
                        p.ingredients.forEach((ing, ii) => {
                            if (ing && ing.name) {
                                pushText('order-ingredient', i, 'name', ing.name, pi + ':' + ii);
                            }
                        });
                    }
                });
            }
        });

        cart.forEach((c, i) => {
            if (c && c.title) pushText('cart', i, 'title', c.title);
            if (c && c.description) pushText('cart', i, 'description', c.description);
        });

        if (uniqMap.size === 0) {
            console.log('[translateStorage] nothing to translate');
            return;
        }

        // build unique text array
        const uniqTexts = Array.from(uniqMap.keys());
        console.log('[translateStorage] unique texts count:', uniqTexts.length);

        // translate sequentially to be gentle with the API
        const translated = [];
        for (let i = 0; i < uniqTexts.length; i++) {
            const s = uniqTexts[i];
            const tr = await translateTextLibre(s, targetLang);
            translated.push(tr);
            console.log(`[translateStorage] translated ${i+1}/${uniqTexts.length}`);
            // small delay (avoid rate limit)
            await new Promise(r => setTimeout(r, 150));
        }

        // apply translations back using maps
        tasks.forEach(task => {
            const uniqIndex = uniqMap.get(task.text);
            const tr = translated[uniqIndex] || task.text;
            if (task.type === 'order') {
                if (orders[task.idx]) orders[task.idx][task.field] = tr;
            } else if (task.type === 'order-pizza') {
                if (orders[task.idx] && Array.isArray(orders[task.idx].pizzas) && orders[task.idx].pizzas[task.pizzaIdx]) {
                    orders[task.idx].pizzas[task.pizzaIdx][task.field] = tr;
                }
            } else if (task.type === 'cart') {
                if (cart[task.idx]) cart[task.idx][task.field] = tr;
            }
                else if (task.type === 'order-ingredient') {
           if (orders[task.idx] && Array.isArray(orders[task.idx].pizzas)) {
            const [pi, ii] = String(task.pizzaIdx).split(':').map(Number);
            if (orders[task.idx].pizzas[pi] && Array.isArray(orders[task.idx].pizzas[pi].ingredients)) {
                if (orders[task.idx].pizzas[pi].ingredients[ii]) {
                    orders[task.idx].pizzas[pi].ingredients[ii].name = tr;
                }
            }
        }
    }
        });

        // save back
        try {
            localStorage.setItem('orders', JSON.stringify(orders));
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('[translateStorage] saved translations to localStorage (MyMemory)');
        } catch (err) {
            console.error('[translateStorage] saving to localStorage failed:', err);
        }

    } catch (err) {
        console.error('[translateStorage] fatal error:', err);
    }
}

// expose quick runner
window.translateStorageNow = function() {
    console.log('translateStorageNow() called — starting translation based on path (MyMemory)');
    return translateStorageUsingLibre();
};

// -----------------------------
// ORIGINAL USER CODE (kept intact, but deduplicated helpers only once)
// -----------------------------

// Function to get orders from localStorage
function getOrdersFromLocalStorage() {
    try {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    } catch (error) {
        console.error('Error loading orders from localStorage:', error);
        return [];
    }
}

// Function to get cart from localStorage
function getCartFromLocalStorage() {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
}

// Function to render ingredients HTML
function renderIngredients(ingredients) {
    if (!ingredients || !Array.isArray(ingredients)) return '';
    
    return ingredients.map(ingredient => `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%">
                <div style="display: flex; align-items: center;">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-zwpvpp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                    </svg>
                    <span class="fs-14 text-gray">${ingredient.name || ''}</span>
                </div>
                <p class="fs-14 text-gray">${ingredient.price ? ingredient.price.toFixed(2) + '₾' : ''}</p>
            </div>
        </div>
    `).join('');
}

// Function to render pizzas HTML
function renderPizzas(pizzas) {
    if (!pizzas || !Array.isArray(pizzas)) return '';
    
    return pizzas.map((pizza, index) => `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%; margin-top: 15px;">
                <div style="display: flex; align-items: center;">
                    <span class="fs-16 text-black" style="text-decoration: none;">Product ${index + 1} : ${pizza.title || ''}</span>
                </div>
                <p class="fs-16 text-black">${pizza.price ? pizza.price.toFixed(2) + '₾' : ''}</p>
            </div>
            <div>
                ${renderIngredients(pizza.ingredients)}
            </div>
        </div>
    `).join('');
}

// Function to calculate original price (for demo purposes)
function calculateOriginalPrice(order) {
    if (order.originalPrice) return order.originalPrice;
    
    // Calculate based on aksiyaPrice * 2 (rough estimation)
    const estimated = (parseFloat(order.totalPrice.replace('₾', '')) * 1.5).toFixed(2);
    return estimated + '₾';
}

// Function to render cart items HTML
function renderCartHTML(cartItems) {
    if (!cartItems || cartItems.length === 0) return '';

    return cartItems.map(item => `
        <div class="MuiBox-root css-1hnm6b6">
            <div class="MuiBox-root css-0">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-fgqxdv">
                    <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3.5 MuiGrid-grid-md-2.2 MuiGrid-grid-lg-1.5 css-2g1k7u">
                            <div class="for_cart_img">
                                <img src="${item.img || item.image || 'https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&amp;_Jalapeno.webp'}" alt="${item.title || item.name || ''}" style="width: 156px; height: 68px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-9.8 MuiGrid-grid-lg-10.5 css-1br1bhk">
                            <div>
                                <div style="margin-bottom: 12px;">
                                    <p class="text-black IBM-Regular fs-20 capitalize tovar_title" style="font-weight: bold;">${item.title || item.name || ''}</p>
                                    <span class=" fs-14 text-gray capitalize">${item.description || ''}</span>
                                </div>
                                <div></div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                <h3 class="text-grey  fs-20"><s>${(item.aksiyaPrice*item.count).toFixed(2)}₾</s></h3>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red  fs-24" style="text-align: end;">${(item.price*item.count).toFixed(2)}₾</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular" style="display: inline-flex;">
                                            <div style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeCartQuantity('${item.id}', -1)">-</div>
                                            <div class="Kanit-Regular" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${item.count || 1}</div>
                                            <div style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeCartQuantity('${item.id}', 1)">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 30px; right: 35px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div onclick="deleteCartItem('${item.id}')">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteForeverIcon">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Main function to render orders HTML
function renderOrdersHTML(orders) {
    if (!orders || orders.length === 0) return '';

    return orders.map(order => `
        <div class="MuiBox-root css-1hnm6b6">
            <div class="MuiBox-root css-0">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-fgqxdv">
                    <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3.5 MuiGrid-grid-md-2.2 MuiGrid-grid-lg-1.5 css-2g1k7u">
                            <div class="for_cart_img">
                                <img src="${order.img || ''}" alt="${order.title || ''}" style="width: 156px; height: 68px; object-fit: contain;">
                            </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-9.8 MuiGrid-grid-lg-10.5 css-1br1bhk">
                            <div>
                                <div style="margin-bottom: 12px;">
                                    <p class="text-black IBM-Regular fs-20 capitalize tovar_title" style="font-weight: bold;">${order.title || ''}</p>
                                    <span class=" fs-14 text-gray capitalize">${order.description || ''}</span>
                                </div>
                                <div>
                                    <div>
                                        <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; width: 100%">
                                            <div style="display: flex; align-items: center;">
                                                <span class="fs-14" style="color: black; font-weight: 600; font-style: italic;">დაწინაურება: ${order.title || ''}</span>
                                            </div>
                                            <p class="fs-14 title_prices" style="color: black; font-weight: 600; font-style: italic;">დაწყებული ${order.price ? order.price.toFixed(2) + '₾' : ''}</p>
                                        </div>
                                        <div>
                                            ${renderPizzas(order.pizzas)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                <h3 class="text-grey  fs-20"><s>${(order.aksiyaPrice * order.count).toFixed(2)}₾</s></h3>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red  fs-24" style="text-align: end;">${(order.price * order.count).toFixed(2)}₾</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular quantity-controls" style='display:inline-flex'>
                                            <div class="quantity-btn" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeQuantity(${order.id}, -1)">-</div>
                                            <div class="quantity-display" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${order.count || 1}</div>
                                            <div class="quantity-btn" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeQuantity(${order.id}, 1)">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="action-buttons" style="position: absolute; top: 30px; right: 35px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div>
                                    <a onclick="editOrder(${order.id})">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss9 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon">
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div onclick="deleteOrder(${order.id})">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss10 css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteForeverIcon">
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Combined function to render all items (orders + cart)
function renderAllItemsHTML(orders, cartItems) {
    // Check if both are empty
    if ((!orders || orders.length === 0) && (!cartItems || cartItems.length === 0)) {
        // Malumot yo'q bo'lsa - bo'sh elementlarni ko'rsatish
        const noCartEmpty = document.getElementById('no-cart-empty');
        const cartContainerEmpty = document.getElementById('cart-container-empty');
        
        if (noCartEmpty) {
            noCartEmpty.style.display = 'inherit';
        }
        if (cartContainerEmpty) {
            cartContainerEmpty.style.display = 'none';
        }
        
        return ''; // Bo'sh string qaytarish
    }

    // Malumot bor bo'lsa - to'ldirilgan elementlarni ko'rsatish
    const noCartEmpty = document.getElementById('no-cart-empty');
    const cartContainerEmpty = document.getElementById('cart-container-empty');
    
    if (noCartEmpty) {
        noCartEmpty.style.display = 'none';
    }
    if (cartContainerEmpty) {
        cartContainerEmpty.style.display = 'block';
    }

    let html = '';
    
    // Add orders first
    if (orders && orders.length > 0) {
        html += renderOrdersHTML(orders);
    }
    
    // Add cart items
    if (cartItems && cartItems.length > 0) {
        html += renderCartHTML(cartItems);
    }
    
    return html;
}

// Function to change order quantity and update total price
function changeQuantity(orderId, change) {
    const orders = getOrdersFromLocalStorage();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex !== -1) {
        const order = orders[orderIndex];
        const newQuantity = (order.count || 1) + change;
        
        if (newQuantity > 0) {
            // Calculate base price from original totalPrice
            const basePriceValue = parseFloat(order.totalPrice.replace('₾', ''));
            const baseQuantity = order.count || 1;
            const unitPrice = basePriceValue / baseQuantity;
            
            // Update quantity and calculate new total price
            order.count = newQuantity;
            const newTotalPrice = (unitPrice * newQuantity).toFixed(2);
            order.totalPrice = newTotalPrice + '₾';
            
            localStorage.setItem('orders', JSON.stringify(orders));
            window.location.reload()
            loadAndRenderAllItems(); // Re-render
        }
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

// total larni yig'ish
let subTotal = cart.reduce((sum, item) => sum + (item.total || 0), 0);

if (document.querySelector(".subTotal")) {
    document.querySelector(".subTotal").innerHTML = subTotal.toFixed(2)
}
}

// Function to change cart item quantity
function changeCartQuantity(itemId, change) {
    const cartItems = getCartFromLocalStorage();
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        const item = cartItems[itemIndex];
        const newQuantity = (item.count || 1) + change;
        
        if (newQuantity > 0) {
            // Calculate unit price from current total or price
            let unitPrice = 0;
            
            if (item.unitPrice) {
                // If unitPrice already exists, use it
                unitPrice = item.unitPrice;
            } else if (item.price && item.count) {
                // Calculate unit price from total and quantity
                unitPrice = parseFloat(item.price) / (item.count || 1);
                item.unitPrice = unitPrice; // Store for future use
            } else if (item.price && item.count) {
                // Calculate unit price from price and quantity
                unitPrice = parseFloat(item.price) / (item.count || 1);
                item.unitPrice = unitPrice; // Store for future use
            } else if (item.price) {
                // If only total exists, assume quantity is 1
                unitPrice = parseFloat(item.price);
                item.unitPrice = unitPrice;
            } else if (item.price) {
                // If only price exists, assume quantity is 1
                unitPrice = parseFloat(item.price);
                item.unitPrice = unitPrice;
            }
            
            // Update quantity and calculate new total
            item.count = newQuantity;
            const newTotal = (unitPrice * newQuantity).toFixed(2);
            item.total = parseFloat(newTotal);
            
            // Also update price if it exists (for backward compatibility)
            if (item.price !== undefined) {
                item.price = parseFloat(newTotal);
            }
            
            localStorage.setItem('cart', JSON.stringify(cartItems));
            loadAndRenderAllItems(); // Re-render
                        window.location.reload()
        } else if (newQuantity <= 0) {
            // Remove item if quantity becomes 0 or less
            deleteCartItem(itemId);
        }
    }
}

// Function to delete order
function deleteOrder(orderId) {
        const orders = getOrdersFromLocalStorage();
        const filteredOrders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(filteredOrders));
        loadAndRenderAllItems(); // Re-render
}

// Function to delete cart item
function deleteCartItem(itemId) {
        const cartItems = getCartFromLocalStorage();
        const filteredCart = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
                window.location.reload();
        loadAndRenderAllItems(); // Re-render
    
}

// Main function to load and render all items (orders + cart)
function loadAndRenderAllItems() {
    const orders = getOrdersFromLocalStorage();
    const cartItems = getCartFromLocalStorage();
    const container = document.getElementById('ordersContainer');
    if (container) container.innerHTML = renderAllItemsHTML(orders, cartItems);
}

// Keep the old function for backward compatibility
function loadAndRenderOrders() {
    loadAndRenderAllItems();
}

 function removeCart(){
    const el = document.querySelector(".css-ekeie0");
    if (el) el.style="display:flex"
    document.querySelector("body").style="overflow: hidden"
}

 function calcels(){
    const el = document.querySelector(".css-ekeie0");
    if (el) el.style="display:none"
    document.querySelector("body").style="overflow: scroll"
}

function removeAll() {
    localStorage.removeItem('cart')
    localStorage.removeItem('order')
    localStorage.removeItem('orders')
    localStorage.removeItem('selectedProduct')
    window.location.reload()
}

function editOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (order) {
        // Tahrirlash rejimini yoqamiz
        localStorage.setItem('edit', 'true');
        localStorage.setItem('for_id', orderId);
        
        // Mahsulot ma'lumotlarini saqlaymiz
        const productData = {
            id: order.id,
            title: order.title,
            img: order.img,
            img_1: order.img_1,
            description: order.description,
            price: order.price,
            aksiyaPrice: order.aksiyaPrice,
            ingredients:order.ingredients
        };
        
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        
        // Pizza uchun qo'shimcha ma'lumotlarni saqlaymiz
        if (order.dataType === 'pizza' && order.pizzas) {
            // Pizza size ma'lumotini alohida saqlash
            const pizzaSize = order.pizzas[0] ? order.pizzas[0].title : null;
            if (pizzaSize) {
                localStorage.setItem('selectedPizzaSize', pizzaSize);
                console.log('Pizza size saqlandi:', pizzaSize);
            }
            
            // Butun order obyektini ham saqlaymiz
            localStorage.setItem('selectedProduct', JSON.stringify(order));
        }
        
        const hasPizza = order.dataType === 'pizza' ||
                        (Array.isArray(order.items) && order.items.some(item => item.dataType === 'pizza'));

        if (hasPizza) {
            window.location.href = '../details-pizza/';
        } else {
            window.location.href = '../details/';
        }
    }
}


// existing subtotal calc & cart_cards rendering
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// cart subtotal
let cartTotal = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.count || 0)), 0);

// orders subtotal (price * quantity)
let ordersTotal = orders.reduce((sum, item) => sum + ((item.price || 0) * (item.count || 0)), 0);

// umumiy total
let grandTotal = cartTotal + ordersTotal;
if (document.querySelector(".subTotal")) {
    document.querySelector(".subTotal").innerHTML = grandTotal.toFixed(2) + "₾";
}

function payment_page() {
    sessionStorage.setItem("dataprice", grandTotal.toFixed(2) + "₾")
    window.location="../oplata"
}

let cartDiv = document.querySelector(".cart_cards");
if (cartDiv) {
    cartDiv.innerHTML += orders.map(item => {
        return `
             <div class="cart_card">
                                    <p class=" fs-20 capitalize"
                                        style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                    <span class="text-red " style="margin-left: auto; font-weight: 500;">${(item.price*item.count).toFixed(2)}₾</span>
                                </div>
        `;
    }).join("");

    cartDiv.innerHTML += cart.map(item => {
        return `
             <div class="cart_card">
                                    <p class=" fs-20 capitalize"
                                        style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                    <span class="text-red " style="margin-left: auto; font-weight: 500;">${(item.price*item.count).toFixed(2)}₾</span>
                                </div>
        `;
    }).join("");
}

// -----------------------------
// DOMContentLoaded: run translation then render
// -----------------------------
document.addEventListener('DOMContentLoaded', function() {
    // try translating storage items based on path language (MyMemory), then render
    translateStorageUsingLibre()
        .catch(err => { console.error('translateStorageUsingLibre error:', err); })
        .finally(() => {
            try {
                loadAndRenderAllItems();
            } catch (e) {
                console.error('loadAndRenderAllItems error:', e);
            }
        });
});

// -----------------------------
// End of merged code
// -----------------------------
