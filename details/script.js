// Global variables
const maxSelection = 5;
const selectedItemsMap = new Map();
let count = 1;
let product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
console.log("aaa");

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePage();

    // Agar edit rejimidan kelgan bo'lsa, yuklaymiz
    if (localStorage.getItem("editMode") === "true") {
        loadExistingOrder();
    }
});

function initializePage() {
    // Display product info
    if (product) {
        document.getElementById("title")?.textContent = product.title || '';
        if (document.getElementById("img")) document.getElementById("img").src = product.img || '';
        document.getElementById("description")?.textContent = product.description || '';
        document.getElementById("price")?.textContent = (product.price || 0) + "₾";
        document.getElementById("aksiyaPrice")?.textContent = (product.aksiyaPrice || 0) + "₾";
    }

    // Initialize pizza blocks
    document.querySelectorAll('.pizza-block').forEach(block => {
        const id = block.dataset.id;
        selectedItemsMap.set(id, new Set());

        const bonusCards = block.querySelector(`#bonus_cards_${id}`);
        if (bonusCards) {
            bonusCards.querySelectorAll('.bonus_card').forEach(card => {
                card.addEventListener('click', function() {
                    selectPizza(id, card);
                });
            });
        }
    });

    // Quantity controls
    if (document.getElementById("plus")) {
        document.getElementById("plus").addEventListener("click", () => {
            count++;
            updateQuantity();
        });
    }

    if (document.getElementById("minus")) {
        document.getElementById("minus").addEventListener("click", () => {
            if (count > 1) {
                count--;
                updateQuantity();
            }
        });
    }

    // Add to cart button
    if (document.getElementById('addToCart')) {
        document.getElementById('addToCart').addEventListener('click', addToCart);
    }
}

// Yuklash faqat edit rejimida
function loadExistingOrder() {
    const editingData = JSON.parse(localStorage.getItem("editingOrder"));
    if (!editingData) return;

    const { order } = editingData;

    // Product ma'lumotlari
    product = {
        title: order.title,
        img: order.img,
        description: order.description,
        price: parseFloat(order.totalPrice) / order.quantity,
        aksiyaPrice: parseFloat(order.totalPrice) / order.quantity
    };
    localStorage.setItem('selectedProduct', JSON.stringify(product));

    document.getElementById("title").textContent = order.title;
    document.getElementById("img").src = order.img;
    document.getElementById("description").textContent = order.description;
    document.getElementById("price").textContent = (parseFloat(order.totalPrice) / order.quantity).toFixed(2) + "₾";
    document.getElementById("aksiyaPrice").textContent = (parseFloat(order.totalPrice) / order.quantity).toFixed(2) + "₾";

    count = order.quantity;
    document.getElementById("count").textContent = count;

    // Pizza va ingredientlarni yuklash
    setTimeout(() => {
        order.pizzas.forEach((pizza, pizzaIndex) => {
            const block = document.querySelector(`.pizza-block[data-id="${pizzaIndex}"]`);
            if (block) {
                const card = Array.from(block.querySelectorAll('.bonus_card')).find(c =>
                    c.querySelector('h2')?.textContent === pizza.title
                );
                if (card) {
                    selectPizza(pizzaIndex, card);
                    loadIngredients(pizzaIndex, pizza.ingredients);
                }
            }
        });
    }, 100);
}

function selectPizza(id, card) {
    const bonusCards = document.querySelector(`#bonus_cards_${id}`);
    const selectedCard = document.querySelector(`#selected_card_${id}`);
    const pizzaExtra = document.querySelector(`.pizza-block[data-id="${id}"] .pizza_extra`);

    if (bonusCards) bonusCards.classList.remove('bonus_cards_active');
    if (selectedCard) selectedCard.style.display = 'flex';
    if (pizzaExtra) pizzaExtra.style.display = 'block';

    if (selectedCard) {
        selectedCard.querySelector(`#bonus_img_${id}`).src = card.querySelector('img').src;
        selectedCard.querySelector(`#bonus_texts_${id} h2`).textContent = card.querySelector('h2').textContent;
        selectedCard.querySelector(`#bonus_texts_${id} p`).textContent = card.querySelector('p').textContent;
        selectedCard.querySelector(`.for_red_count`).textContent = card.querySelector('.for_red_count').textContent;
    }

    selectedItemsMap.set(id, new Set());
    const container = document.querySelector(`#ingredient_cards_${id}`);
    if (container) container.innerHTML = '';
}

function loadIngredients(pizzaId, ingredients) {
    if (!ingredients || !ingredients.length) return;
    const container = document.querySelector(`#ingredient_cards_${pizzaId}`);
    if (!container) return;

    container.innerHTML = '';
    selectedItemsMap.set(pizzaId, new Set());

    ingredients.forEach(ing => {
        const key = ing.name + ing.price;
        selectedItemsMap.get(pizzaId).add(key);

        container.innerHTML += `
            <div data-key="${key}" style="display:flex;justify-content:space-between;">
                <span>${ing.name}</span>
                <span>+${ing.price}₾</span>
            </div>
        `;
    });
}

function updateQuantity() {
    document.getElementById("count").textContent = count;
    document.getElementById("price").textContent = (product.price * count).toFixed(2) + "₾";
    document.getElementById("aksiyaPrice").textContent = (product.aksiyaPrice * count).toFixed(2) + "₾";
}

function addToCart() {
    if (!product || !product.title) {
        alert('Avval pizza tanlang!');
        return;
    }

    const newOrder = {
        ...product,
        quantity: count,
        pizzas: [],
        totalPrice: (product.aksiyaPrice * count).toFixed(2) + "₾"
    };

    document.querySelectorAll('.pizza-block').forEach(block => {
        const id = block.dataset.id;
        const selectedCard = block.querySelector(`#selected_card_${id}`);
        if (selectedCard && selectedCard.style.display === 'flex') {
            const pizza = {
                title: document.querySelector(`#bonus_texts_${id} h2`).textContent,
                price: parseFloat(selectedCard.querySelector('.for_red_count').textContent.replace(/[^\d.]/g, '')),
                ingredients: []
            };
            newOrder.pizzas.push(pizza);
        }
    });

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Edit rejim tugadi
    localStorage.removeItem("editMode");
    localStorage.removeItem("editingOrder");

    alert('Mahsulot savatga qo‘shildi!');
    window.location.href = "cart.html";
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    cartItems.innerHTML = '';

    if (orders.length === 0) {
        cartItems.innerHTML = '<p>Savat bo‘sh</p>';
        return;
    }

    orders.forEach((order, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-header">
                <img src="${order.img}" width="50">
                <div>
                    <h3>${order.title} (x${order.quantity})</h3>
                    <p>${order.description}</p>
                </div>
                <span>${order.totalPrice}</span>
            </div>
            <div class="cart-actions">
                <button onclick="editOrder(${index})">Edit</button>
                <button onclick="removeFromCart(${index})">O‘chirish</button>
            </div>
        `;
        cartItems.appendChild(itemDiv);
    });
}

function editOrder(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (index >= 0 && index < orders.length) {
        const order = orders[index];
        localStorage.setItem("editMode", "true");
        localStorage.setItem("editingOrder", JSON.stringify({ order, index }));
        window.location.href = "add-to-cart.html";
    }
}

function removeFromCart(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (index >= 0 && index < orders.length) {
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        updateCartDisplay();
    }
}
