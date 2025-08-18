function getOrdersFromLocalStorage() {
            try {
                const orders = localStorage.getItem('orders');
                return orders ? JSON.parse(orders) : [];
            } catch (error) {
                console.error('Error loading orders from localStorage:', error);
                return [];
            }
        }

        // Function to render ingredients HTML
        function renderIngredients(ingredients) {
            if (!ingredients || !Array.isArray(ingredients)) return '';
            
            return ingredients.map(ingredient => `
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px;">
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
                    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px; margin-top: 15px;">
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

        // Main function to render orders HTML
        function renderOrdersHTML(orders) {
            if (!orders || orders.length === 0) {
                return `<div style="text-align: center; padding: 50px; color: #666;">
                    <h2>🛒 Korzinka bo'sh</h2>
                    <p>Hech qanday buyurtma mavjud emas.</p>
                    <p style="margin-top: 15px; color: #999;">Buyurtmalaringiz shu yerda ko'rsatiladi.</p>
                </div>`;
            }

            return orders.map(order => `
                <div class="MuiBox-root css-1hnm6b6">
                    <div class="MuiBox-root css-0">
                        <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-fgqxdv">
                            <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3.5 MuiGrid-grid-md-2.2 MuiGrid-grid-lg-1.5 css-2g1k7u">
                                    <div>
                                        <img src="${order.img || ''}" alt="${order.title || ''}" style="width: 156px; height: 68px; object-fit: contain;">
                                    </div>
                                </div>
                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-9.8 MuiGrid-grid-lg-10.5 css-1br1bhk">
                                    <div>
                                        <div style="margin-bottom: 12px;">
                                            <p class="text-black IBM-Regular fs-20 capitalize" style="font-weight: bold;">${order.title || ''}</p>
                                            <span class="Kanit-Light fs-14 text-gray capitalize">${order.description || ''}</span>
                                        </div>
                                        <div>
                                            <div>
                                                <div style="display: flex; justify-content: space-between; align-items: center; max-width: 400px;">
                                                    <div style="display: flex; align-items: center;">
                                                        <span class="fs-14" style="color: black; font-weight: 900; font-style: italic;">Promotion: ${order.title || ''}</span>
                                                    </div>
                                                    <p class="fs-14" style="color: black; font-weight: 900; font-style: italic;">starting from ${order.price ? order.price.toFixed(2) + '₾' : ''}</p>
                                                </div>
                                                <div>
                                                    ${renderPizzas(order.pizzas)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
                                        <h3 class="text-grey Kanit-Bold fs-20"><s>${calculateOriginalPrice(order)}</s></h3>
                                    </div>
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0px;">
                                        <h3 class="text-red Kanit-Bold fs-24" style="text-align: end;">${order.totalPrice || ''}</h3>
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
                                            <a href="/offer/details/_GE${order.id || ''}">
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

        // Function to change quantity and update total price
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
                    loadAndRenderOrders(); // Re-render
                }
            }
        }

        // Function to delete order
        function deleteOrder(orderId) {
            if (confirm('Bu buyurtmani o\'chirmoqchimisiz?')) {
                const orders = getOrdersFromLocalStorage();
                const filteredOrders = orders.filter(order => order.id !== orderId);
                localStorage.setItem('orders', JSON.stringify(filteredOrders));
                loadAndRenderOrders(); // Re-render
            }
        }

        // Main function to load and render orders
        function loadAndRenderOrders() {
            const orders = getOrdersFromLocalStorage();
            const container = document.getElementById('ordersContainer');
            container.innerHTML = renderOrdersHTML(orders);
        }

        // Load orders when page loads
        document.addEventListener('DOMContentLoaded', function() {
            loadAndRenderOrders();
        });