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
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red  fs-24" style="text-align: end;">${item.total ? (typeof item.total === 'number' ? item.total.toFixed(2) : parseFloat(item.total).toFixed(2)) + '₾' : (item.price ? (typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price).toFixed(2)) + '₾' : '')}</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular" style="display: inline-flex;">
                                            <div style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeCartQuantity('${item.id}', -1)">-</div>
                                            <div class="Kanit-Regular" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${item.quantity || 1}</div>
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
                                                <span class="fs-14" style="color: black; font-weight: 600; font-style: italic;">Promotion: ${order.title || ''}</span>
                                            </div>
                                            <p class="fs-14 title_prices" style="color: black; font-weight: 600; font-style: italic;">starting from ${order.price ? order.price.toFixed(2) + '₾' : ''}</p>
                                        </div>
                                        <div>
                                            ${renderPizzas(order.pizzas)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                <h3 class="text-grey  fs-20"><s>${(order.totalPrice)}</s></h3>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                <h3 class="text-red  fs-24" style="text-align: end;">${(order.price * order.quantity).toFixed(2)}</h3>
                                <div>
                                    <div>
                                        <div class="Kanit-Regular quantity-controls" style='display:inline-flex'>
                                            <div class="quantity-btn" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 14px; box-shadow: lightgrey 0px 2px 4px 3px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; background: rgb(0, 120, 174); color: rgb(255, 255, 255);" onclick="changeQuantity(${order.id}, -1)">-</div>
                                            <div class="quantity-display" style="border-radius: 100px; padding-block: 8px; width: 39px; height: 39px; font-weight: bold; font-size: 24px; box-shadow: none; display: inline-flex; justify-content: center; align-items: center; cursor: auto; user-select: none; color: rgb(0, 0, 0); margin-left: 4px; margin-right: 4px;">${order.quantity || 1}</div>
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
        const newQuantity = (order.quantity || 1) + change;
        
        if (newQuantity > 0) {
            // Calculate base price from original totalPrice
            const basePriceValue = parseFloat(order.totalPrice.replace('₾', ''));
            const baseQuantity = order.quantity || 1;
            const unitPrice = basePriceValue / baseQuantity;
            
            // Update quantity and calculate new total price
            order.quantity = newQuantity;
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

document.querySelector(".subTotal").innerHTML = subTotal.toFixed(2)
}

// Function to change cart item quantity
function changeCartQuantity(itemId, change) {
    const cartItems = getCartFromLocalStorage();
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        const item = cartItems[itemIndex];
        const newQuantity = (item.quantity || 1) + change;
        
        if (newQuantity > 0) {
            // Calculate unit price from current total or price
            let unitPrice = 0;
            
            if (item.unitPrice) {
                // If unitPrice already exists, use it
                unitPrice = item.unitPrice;
            } else if (item.total && item.quantity) {
                // Calculate unit price from total and quantity
                unitPrice = parseFloat(item.total) / (item.quantity || 1);
                item.unitPrice = unitPrice; // Store for future use
            } else if (item.price && item.quantity) {
                // Calculate unit price from price and quantity
                unitPrice = parseFloat(item.price) / (item.quantity || 1);
                item.unitPrice = unitPrice; // Store for future use
            } else if (item.total) {
                // If only total exists, assume quantity is 1
                unitPrice = parseFloat(item.total);
                item.unitPrice = unitPrice;
            } else if (item.price) {
                // If only price exists, assume quantity is 1
                unitPrice = parseFloat(item.price);
                item.unitPrice = unitPrice;
            }
            
            // Update quantity and calculate new total
            item.quantity = newQuantity;
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
    if (confirm('Bu buyurtmani o\'chirmoqchimisiz?')) {
        const orders = getOrdersFromLocalStorage();
        const filteredOrders = orders.filter(order => order.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(filteredOrders));
        loadAndRenderAllItems(); // Re-render
    }
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
    container.innerHTML = renderAllItemsHTML(orders, cartItems);
}

// Load all items when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadAndRenderAllItems();
});

// Keep the old function for backward compatibility
function loadAndRenderOrders() {
    loadAndRenderAllItems();
}

 function removeCart(){
    document.querySelector(".css-ekeie0").style="display:flex"
    document.querySelector("body").style="overflow: hidden"
}

 function calcels(){
    document.querySelector(".css-ekeie0").style="display:none"
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
        // Tahrirlanayotgan buyurtma ID sini saqlaymiz
        localStorage.setItem('for_id', orderId);
        // Mahsulot ma'lumotlarini saqlaymiz
        localStorage.setItem('selectedProduct', JSON.stringify({
          title: order.title,
          img: order.img,
          description: order.description,
          price: order.price,
          aksiyaPrice: order.aksiyaPrice
        }));
        
        // Bosh sahifaga yo'naltiramiz
        window.location.href = '../details-pizza/'; // Asosiy sahifa manzili
      }
    }

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// cart subtotal
let cartTotal = cart.reduce((sum, item) => sum + (item.total || 0), 0);

// orders subtotal (price * quantity)
let ordersTotal = orders.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);

// umumiy total
let grandTotal = cartTotal + ordersTotal;
document.querySelector(".subTotal").innerHTML = grandTotal.toFixed(2) + "₾"


let cartDiv = document.querySelector(".cart_cards");

cartDiv.innerHTML += orders.map(item => {
    return `
         <div class="cart_card">
                                <p class=" fs-20 capitalize"
                                    style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                <span class="text-red " style="margin-left: auto; font-weight: 500;">${item.price*item.quantity}₾</span>
                            </div>
    `;
}).join("");

cartDiv.innerHTML += cart.map(item => {
    return `
         <div class="cart_card">
                                <p class=" fs-20 capitalize"
                                    style="color: rgb(73, 73, 73);font-weight: 300; text-decoration: none;">${item.title}</p>
                                <span class="text-red " style="margin-left: auto; font-weight: 500;">${item.price*item.quantity}₾</span>
                            </div>
    `;
}).join("");
