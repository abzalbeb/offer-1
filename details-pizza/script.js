
        document.addEventListener("DOMContentLoaded", function () {
            const pizzaOptions = document.querySelectorAll(".pizza_size_select");

            function setActive(option) {
                pizzaOptions.forEach(opt => {
                    const svg = opt.querySelector("svg");
                    if (svg) svg.style.display = "none";  // hammasini yashiramiz
                    opt.classList.remove("active");
                });

                const svg = option.querySelector("svg");
                if (svg) svg.style.display = "inline-block"; // faqat tanlangani ko‘rsatamiz
                option.classList.add("active");
            }

            // --- sahifa yuklanganda o'rtadagi div (data-id=3) ni default active qilish ---
            const defaultOption = document.querySelector('.pizza_size_select[data-id="2"]');
            if (defaultOption) {
                setActive(defaultOption);
            }

            // --- boshqa div bosilganda shu divni active qilish ---
            pizzaOptions.forEach(option => {
                option.addEventListener("click", function () {
                    setActive(this);
                });
            });
        });

        
const maxSelection = 5;
        let count = 1;

        // --- Product ma'lumoti ---
        let product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
        let basePrice = parseFloat(product.price) || 0;
        let aksiyaBasePrice = parseFloat(product.aksiyaPrice) || 0;

       

// TUZATILGAN KOD:
let kichkina_vibor = document.querySelector(".kichkina_pizza ");
if (kichkina_vibor && product.price) {
    kichkina_vibor.setAttribute("data-price", ((product.aksiyaPrice-11)/100*localStorage.getItem("for_aksiya")).toFixed(2));
    kichkina_vibor.setAttribute("data-aksiya-price", ((product.aksiyaPrice-11)).toFixed(2)); // -11 qo'shildi
}

let ortacha_vibor = document.querySelector(".ortacha_pizza ");
if (ortacha_vibor && product.price) {
    ortacha_vibor.setAttribute("data-price", ((product.aksiyaPrice)/100*localStorage.getItem("for_aksiya")).toFixed(2));
    ortacha_vibor.setAttribute("data-aksiya-price", ((product.aksiyaPrice)).toFixed(2)); // Qo'shildi
}

let kotta_vibor = document.querySelector(".kotta_pizza ");
if (kotta_vibor && product.price) {
    kotta_vibor.setAttribute("data-price", ((product.aksiyaPrice+12)/100*localStorage.getItem("for_aksiya")).toFixed(2));
    kotta_vibor.setAttribute("data-aksiya-price", ((product.aksiyaPrice+12)).toFixed(2)); // Qo'shildi
}

        let imgDivs = document.querySelectorAll(".for_size_img");

imgDivs.forEach(div => {
    div.innerHTML = `<img src="${product.img_1}" alt="product" style="width: 100%; object-fit: fill; border: 2px dashed rgb(0, 120, 173); border-radius: 100%; padding: 2px;">`;
});

        // --- Default pizza ---
        const defaultPizza = {
            id: "2",
            title: "Medium Size - 26cm 6pcs",
            price: parseFloat(product.price),
            ingredients: []
        };
        let selectedPizza = JSON.parse(JSON.stringify(defaultPizza));

        // --- Default ingredients ---
        const defaultDough = { id: "1001", title: "Italian Thin", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp", type: "dough" };
        const defaultEdge = { id: "edge-default", title: "Classic Edge", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp", type: "edge" };

        // Default standard ingredients (data-id lardan olingan)


        const defaultStandardIngredients7 = [
            { id: "230", title: "Mozzarella", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mozarella.webp", type: "standard" },
            { id: "231", title: "Corn", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cornpng_parspng_com_8.webp", type: "standard" },
            { id: "232", title: "Pizza Sauce", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
            { id: "233", title: "Mushrooms", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
            { id: "235", title: "Onions", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
            { id: "236", title: "Black Olive", price: 0, img: "https://deykvccewcmn1.cloudfront.net/black%20olives.png", type: "standard" },
            { id: "237", title: "Green Pepper", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" }
        ];


        const defaultStandardIngredients6 = [
            { id: "201", title: "Mozzarella", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
            { id: "202", title: "Pizza Sauce", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
            { id: "203", title: "Chicken", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Chicken_topping.webp", type: "standard" },
            { id: "204", title: "Onions", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
            { id: "205", title: "Green Pepper", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" },
            { id: "206", title: "Sweet Chilli Sauce", price: 0, img: "https://deykvccewcmn1.cloudfront.net/20240831224905902_pizzasauce.webp", type: "standard" },
        ];
        
        const defaultStandardIngredients5 = [
            { id: "220", title: "Mozzarella", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mozarella.webp", type: "standard" },
            { id: "221", title: "Cheddar", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cheddar.webp", type: "standard" },
            { id: "222", title: "Pizza Sauce", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
            { id: "223", title: "Gorgonzola Cheese", price: 0, img: "https://deykvccewcmn1.cloudfront.net/gorgonzola.webp", type: "standard" },
            { id: "226", title: "Feta", price: 0, img: "https://deykvccewcmn1.cloudfront.net/feta.webp", type: "standard" }
        ];


        const defaultStandardIngredients3 = [
            { id: "207", title: "Mozzarella", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
            { id: "208", title: "Pizza Sauce", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
            { id: "209", title: "Pepperoni", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Pepperoni_t.png", type: "standard" },
        ];

        const defaultStandardIngredients4 = [
    { id: "240", title: "Mozzarella", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "topping" },
    { id: "241", title: "Pizza Sauce", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "topping" },
    { id: "242", title: "Ham", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "topping" },
    { id: "243", title: "Pepperoni", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png", type: "topping" }
];


const defaultStandardIngredients44 = [
    { id: "250", title: "Mozzarella", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "topping" },
    { id: "251", title: "Pizza Sauce", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "topping" },
    { id: "242", title: "Mushrooms", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "topping" },
    { id: "253", title: "Pepperoni", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png", type: "topping" }
];



        // YANGI QO'SHILGAN QISM: Ingredients raqamiga qarab default ingredients tanlash
        function getDefaultStandardIngredients() {
            const ingredientsCount = product.Ingredients || product.ingredients;
            
            if (ingredientsCount === "6" || ingredientsCount === 6) {
                return defaultStandardIngredients6;
            } else if (ingredientsCount === "3" || ingredientsCount === 3) {
                return defaultStandardIngredients3;
            } else if (ingredientsCount === "5" || ingredientsCount === 5) {
                return defaultStandardIngredients5;
            } 
            else if (ingredientsCount === "7" || ingredientsCount === 7) {
                return defaultStandardIngredients7;
            } 
            else if (ingredientsCount === "44" || ingredientsCount === 44) {
                return defaultStandardIngredients44;
            } 
            else {
                // Default holatda 6 ta ingredientni qaytarish
                return defaultStandardIngredients6;
            }
        }

        // Tanlangan default ingredients ni olish
        const defaultStandardIngredients = getDefaultStandardIngredients();

        // --- Helper functions ---
        function setIngredient(item) {
            if (item.type === 'extra') {
                // Extra ingredients uchun - duplikat tekshirish
                const existingIndex = selectedPizza.ingredients.findIndex(i => i.id === item.id && i.type === 'extra');
                if (existingIndex === -1) {
                    selectedPizza.ingredients.push(item);
                }
            } else {
                // Dough, edge, standard uchun - o'sha tipdagi ingredientni almashtirish
                selectedPizza.ingredients = selectedPizza.ingredients.filter(i => !(i.type === item.type && (item.type !== 'standard' || i.id === item.id)));
                selectedPizza.ingredients.push(item);
            }
        }

        function removeIngredientById(id) {
            selectedPizza.ingredients = selectedPizza.ingredients.filter(i => i.id !== id);
        }

        function getIngredientsTotal() {
            return selectedPizza.ingredients.reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0);
        }

        function updateTotalPrice() {
    const ingredientsTotal = getIngredientsTotal();
    const total = (selectedPizza.price + ingredientsTotal) * count;
    
    // Aktiv pizza o'lchamini topish
    const activePizzaSize = document.querySelector(".pizza_size_select.active");
    let currentAksiyaPrice = aksiyaBasePrice; // default qiymat
    
    if (activePizzaSize && activePizzaSize.dataset.aksiyaPrice) {
        currentAksiyaPrice = parseFloat(activePizzaSize.dataset.aksiyaPrice);
    }
    
    const totalAksiya = currentAksiyaPrice * count;
    
    const priceEl = document.querySelector("#price");
    const aksiyaEl = document.querySelector("#aksiyaPrice");
    if (priceEl) priceEl.textContent = total.toFixed(2) + "₾";
    if (aksiyaEl) aksiyaEl.textContent = totalAksiya.toFixed(2) + "₾";

    updateIngredientsDisplay();
}

        function generateExtraIngredientId(title) {
            // Title asosida unique ID yaratish
            return "extra_" + title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        }

        function updateDoughSelection() {
            // Barcha dough elementlaridan active classni olib tashlash
            document.querySelectorAll(".for_vibor").forEach(el => {
                el.classList.remove("vibor_active");
            });

            // Tanlangan dough ni topish va active qilish
            const selectedDoughId = selectedPizza.ingredients.find(i => i.type === "dough")?.id;
            if (selectedDoughId) {
                const selectedEl = document.querySelector(`.for_vibor[data-id="${selectedDoughId}"]`);
                if (selectedEl) selectedEl.classList.add("vibor_active");
            }
        }

        // Tanlangan ingredientlarni HTML da ko'rsatish funksiyasi
        function updateIngredientsDisplay() {
            let displayContainer = document.querySelector('.container-map-info-price');

            // Agar container mavjud bo'lmasa, yaratish
            if (!displayContainer) {
                displayContainer = document.createElement('div');
                displayContainer.className = 'container-map-info-price';

                // Container ni qo'shish uchun mos joy topish (addToCart tugmasidan oldin)
                const addToCartBtn = document.querySelector('#addToCart');
                if (addToCartBtn) {
                    addToCartBtn.parentNode.insertBefore(displayContainer, addToCartBtn);
                } else {
                    document.body.appendChild(displayContainer);
                }
            }

            // Contentenrni tozalash
            displayContainer.innerHTML = '';

            if (selectedPizza.ingredients.length === 0) return;

            // MuiBox-root yaratish
            const muiBox = document.createElement('div');
            muiBox.className = 'MuiBox-root css-1hnm6b6';

            // Grid container yaratish
            const gridContainer = document.createElement('div');
            gridContainer.className = 'MuiGrid-root MuiGrid-container css-1d3bbye';

            const gridItem = document.createElement('div');
            gridItem.className = 'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-9 MuiGrid-grid-md-7 MuiGrid-grid-lg-7 css-1celjv4';

            const card = document.createElement('div');
            card.className = 'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr';

            // Pizza asosiy ma'lumotlarini ko'rsatish
            const dough = selectedPizza.ingredients.find(i => i.type === 'dough')?.title || 'Italian Thin';
            const edge = selectedPizza.ingredients.find(i => i.type === 'edge')?.title || 'Classic Edge';
            const standardIngredients = selectedPizza.ingredients.filter(i => i.type === 'standard').map(i => i.title);

            const mainInfoDiv = document.createElement('div');
            mainInfoDiv.style.cssText = 'display: flex; justify-content: space-between;';

            const mainInfoText = document.createElement('span');
            mainInfoText.className = 'fs-13  capatilize';
            mainInfoText.style.color = 'rgb(73, 73, 73)';
            mainInfoText.textContent = `${selectedPizza.title}: ${standardIngredients.join(', ')}, ${dough}, ${edge}`;

            const mainPrice = document.createElement('span');
            mainPrice.className = 'fs-13 ';
            mainPrice.style.color = 'rgb(73, 73, 73)';
            mainPrice.textContent = `${selectedPizza.price.toFixed(2)}₾`;

            mainInfoDiv.appendChild(mainInfoText);
            mainInfoDiv.appendChild(mainPrice);
            card.appendChild(mainInfoDiv);

            // Extra ingredientlarni ko'rsatish
            const extraIngredients = selectedPizza.ingredients.filter(i => i.type === 'extra');

            extraIngredients.forEach(ingredient => {
                const extraDiv = document.createElement('div');
                extraDiv.style.cssText = 'display: flex; justify-content: space-between; color: rgb(73, 73, 73);';

                const extraText = document.createElement('span');
                extraText.className = 'fs-13 ';
                extraText.textContent = `Extra Ingredients: ${ingredient.title}`;

                const extraPriceDiv = document.createElement('span');
                extraPriceDiv.className = 'fs-13 ';
                extraPriceDiv.style.textWrap = 'nowrap';

                // Plus icon qo'shish
                const plusIcon = document.createElement('svg');
                plusIcon.className = 'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1lz7e0';
                plusIcon.setAttribute('focusable', 'false');
                plusIcon.setAttribute('aria-hidden', 'true');
                plusIcon.setAttribute('viewBox', '0 0 24 24');
                plusIcon.setAttribute('data-testid', 'AddIcon');
                plusIcon.innerHTML = '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z">+</path>';

                extraPriceDiv.appendChild(plusIcon);
                extraPriceDiv.appendChild(document.createTextNode(` ${ingredient.price.toFixed(2)}₾`));

                extraDiv.appendChild(extraText);
                extraDiv.appendChild(extraPriceDiv);
                card.appendChild(extraDiv);
            });

            // Br qo'shish
            const br = document.createElement('br');
            card.appendChild(br);

            // Total price qo'shish
            const totalDiv = document.createElement('div');
            totalDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: center; gap: 6px;';

            const totalLabel = document.createElement('p');
            totalLabel.className = 'fs-24 ';
            totalLabel.style.color = 'rgb(73, 73, 73)';
            totalLabel.textContent = 'Total Price:';

            const totalPriceDiv = document.createElement('div');
            const totalPrice = (selectedPizza.price + getIngredientsTotal()) * count;

            const totalPriceSpan = document.createElement('span');
            totalPriceSpan.className = ' text-red';
            totalPriceSpan.style.fontSize = '30px';
            totalPriceSpan.textContent = `${totalPrice.toFixed(2)}₾`;

            totalPriceDiv.appendChild(totalPriceSpan);
            totalPriceDiv.appendChild(document.createTextNode('   '));

            totalDiv.appendChild(totalLabel);
            totalDiv.appendChild(totalPriceDiv);
            card.appendChild(totalDiv);

            gridItem.appendChild(card);
            gridContainer.appendChild(gridItem);

            // Br qo'shish
            const br1 = document.createElement('br');
            const br2 = document.createElement('br');
            gridContainer.appendChild(br1);
            gridContainer.appendChild(br2);

            // Add to cart button yaratish (CLASS bilan)
            const addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth  fs-18 jss8 css-np2orv addToCartBtn';
            addToCartBtn.setAttribute('tabindex', '0');
            addToCartBtn.setAttribute('type', 'button');
            addToCartBtn.textContent = 'Add to cart';

            const rippleSpan = document.createElement('span');
            rippleSpan.className = 'MuiTouchRipple-root css-w0pj6f';
            addToCartBtn.appendChild(rippleSpan);

            muiBox.appendChild(gridContainer);
            muiBox.appendChild(addToCartBtn);
            displayContainer.appendChild(muiBox);
        }

        // Maksimum extra ingredients soni
        const maxExtraIngredients = 5;

        // --- Initialize Page ---
        function initializePage() {
            // UI elementlarni to'ldirish
            if (Object.keys(product).length) {
                const t = document.getElementById("title"), i = document.getElementById("img"), d = document.getElementById("description"),
                    p = document.getElementById("price"), ap = document.getElementById("aksiyaPrice");
                if (t) t.textContent = product.title || '';
                if (i) i.src = product.img_1 || '';
                if (d) d.textContent = product.description || '';
                if (p) p.textContent = (basePrice || selectedPizza.price).toFixed(2) + "₾";
                if (ap) ap.textContent = aksiyaBasePrice.toFixed(2) + "₾";
            }

            // 1) Default dough va edge qo'shish
            setIngredient(defaultDough);
            setIngredient(defaultEdge);
            updateDoughSelection();

            // 2) Default standard ingredients qo'shish (YANGILANGAN QISM)
            defaultStandardIngredients.forEach(item => setIngredient(item));

            // 3) Extra ingredients event listeners (for_vibor_0)
            const extraItems = document.querySelectorAll(".for_vibor_0");

            extraItems.forEach(el => {
                el.addEventListener("click", () => {
                    const title = el.dataset.title;
                    const id = generateExtraIngredientId(title);
                    const priceStr = el.dataset.price || "+0₾";
                    const price = parseFloat(priceStr.replace(/[^\d.]/g, '')) || 0;
                    const img = el.querySelector('img')?.src || '';

                    const isActive = el.classList.contains("for_active_0");

                    if (isActive) {
                        // Agar active bo'lsa, olib tashlash
                        el.classList.remove("for_active_0");
                        removeIngredientById(id);
                        console.log(`${title} olib tashlandi`);
                    } else {
                        // Agar active bo'lmasa, maksimum limit tekshirish
                        const currentExtraCount = selectedPizza.ingredients.filter(i => i.type === "extra").length;

                        if (currentExtraCount < maxExtraIngredients) {
                            el.classList.add("for_active_0");
                            setIngredient({ id, title, price, img, type: "extra" });
                            console.log(`${title} qo'shildi. Extra ingredients soni: ${currentExtraCount + 1}`);
                        } else {
                            const errorPopup = document.querySelector('#Toastify-nostore');

                            // Toastni ko'rsatish
                            errorPopup.style.setProperty('display', 'flex', 'important');

                            // 2 sekunddan keyin toastni yashirish va success ni o'chirish
                            setTimeout(() => {
                                errorPopup.style.setProperty('display', 'none', 'important');
                            }, 2200);
                        }
                    }

                    console.log('Hozirgi ingredients:', selectedPizza.ingredients);
                    updateTotalPrice();
                });
            });

            // 4) Standard ingredients event listeners
            const standardItems = document.querySelectorAll(".for_vibor_2");

            standardItems.forEach(el => {
                el.addEventListener("click", () => {
                    const id = el.dataset.id;
                    const title = el.dataset.title;
                    const price = parseFloat(el.dataset.price) || 0;
                    const img = el.dataset.img;

                    const isActive = el.classList.contains("for_active_2");

                    if (isActive) {
                        // Agar active bo'lsa, olib tashlash
                        el.classList.remove("for_active_2");
                        removeIngredientById(id);
                    } else {
                        // Agar active bo'lmasa, qo'shish
                        el.classList.add("for_active_2");
                        setIngredient({ id, title, price, img, type: "standard" });
                    }

                    // Faqat clicked bo'lgan element bilan ishlash
                    const allDefaultIds = defaultStandardIngredients.map(item => item.id);
                    const activeElements = Array.from(standardItems).filter(div => div.classList.contains("for_active_2"));
                    const activeIds = activeElements.map(div => div.dataset.id);

                    // Agar hech qaysi default ingredient tanlanmagan bo'lsa, ularni qayta qo'shish
                    const hasAnyDefault = allDefaultIds.some(defId => activeIds.includes(defId));

                    if (!hasAnyDefault) {
                        // Hech qaysi default ingredient yo'q, ularni qayta active qilish
                        defaultStandardIngredients.forEach(defItem => {
                            const defElement = document.querySelector(`.for_vibor_2[data-id="${defItem.id}"]`);
                            if (defElement && !defElement.classList.contains("for_active_2")) {
                                defElement.classList.add("for_active_2");
                                setIngredient(defItem);
                            }
                        });
                    }

                    updateTotalPrice();
                });
            });

            // 5) Dough tanlash
            document.querySelectorAll(".for_vibor").forEach(el => {
                el.addEventListener("click", () => {
                    const newDough = {
                        id: el.dataset.id,
                        title: el.dataset.title,
                        price: parseFloat(el.dataset.price) || 0,
                        img: el.dataset.img,
                        type: "dough"
                    };

                    setIngredient(newDough);
                    updateDoughSelection();
                    updateTotalPrice();
                });
            });

            // 6) Edge tanlash
            document.querySelectorAll(".for_vibor_edge").forEach(el => {
                el.addEventListener("click", () => {
                    setIngredient({
                        id: el.dataset.id,
                        title: el.dataset.title,
                        price: parseFloat(el.dataset.price) || 0,
                        img: el.dataset.img,
                        type: "edge"
                    });
                    updateTotalPrice();
                });
            });

            // 7) Pizza size tanlash
            document.querySelectorAll(".pizza_size_select").forEach(el => {
                el.addEventListener("click", function () {
                    document.querySelectorAll(".pizza_size_select").forEach(p => p.classList.remove("active"));
                    this.classList.add("active");
                    selectedPizza.id = this.dataset.id || selectedPizza.id;
                    selectedPizza.title = this.dataset.size || selectedPizza.title;
                    selectedPizza.price = parseFloat(this.dataset.price || selectedPizza.price);
                    updateTotalPrice();
                });
            });

            updateTotalPrice();
        }

        // --- PLUS/MINUS tugmalari ---
        document.getElementById("plus")?.addEventListener("click", () => {
            if (count < maxSelection) {
                count++;
                document.getElementById("count").textContent = count;
                updateTotalPrice();
            }
        });

        document.getElementById("minus")?.addEventListener("click", () => {
            if (count > 1) {
                count--;
                document.getElementById("count").textContent = count;
                updateTotalPrice();
            }
        });

        // --- ADD TO CART HANDLER (YANGILANGAN VERSIYA) ---
        function addToCartHandler() {
            // Dough va edge mavjud bo'lmasa default qo'shish
            if (!selectedPizza.ingredients.some(i => i.type === "dough")) {
                setIngredient(defaultDough);
            }
            if (!selectedPizza.ingredients.some(i => i.type === "edge")) {
                setIngredient(defaultEdge);
            }

            // Ingredients arrayni 2-chi strukturaga o'xshash formatga o'zgartirish
            const formattedIngredients = selectedPizza.ingredients.map(ingredient => ({
                name: ingredient.title,  // title -> name ga o'zgartirish
                price: ingredient.price
                // id, img, type larni olib tashlaymiz chunki 2-struktura bunday ma'lumot bermaydi
            }));

            const totalPrice = (selectedPizza.price + getIngredientsTotal()) * count;

            const cartProduct = {
                id: parseInt(product.id) || product.id,
                img: product.img,
                img_1: product.img_1,
                aksiyaPrice: aksiyaBasePrice,
                date: new Date().toISOString(),
                description: product.description,
                title: product.title,
                quantity: count,
                price: selectedPizza.price, // 2-struktura price ni ham saqlaydi
                totalPrice: totalPrice.toFixed(2) + "₾",
                dataType: 'pizza',
                ingredients: product.Ingredients || product.ingredients,
                pizzas: [
                    {
                        title: selectedPizza.title,
                        price: 0, // 2-strukturada pizza price 0 bo'ladi
                        ingredients: formattedIngredients // yangi format
                    }
                ]
            };

            // Cart ga qo'shish
            let cart = JSON.parse(localStorage.getItem('orders')) || [];
            cart.push(cartProduct);
            localStorage.setItem('orders', JSON.stringify(cart));

            console.log("Cart product qo'shildi (2-struktura formatida):", cartProduct);
            console.log("Hozirgi cart:", cart);

            const toast = document.querySelector('#Toastify-success');

            // Toastni ko'rsatish
            toast.style.setProperty('display', 'flex', 'important');

            // 2 sekunddan keyin toastni yashirish va success ni o'chirish
            setTimeout(() => {
                toast.style.setProperty('display', 'none', 'important');
                window.location.href = '../pizza/'
            }, 2200);
        }

        // EVENT DELEGATION - barcha Add to Cart tugmalar uchun
        document.addEventListener('click', function (e) {
            // Agar bosilgan element yoki uning parent elementi addToCartBtn classiga ega bo'lsa
            if (e.target.classList.contains('addToCartBtn') ||
                e.target.closest('.addToCartBtn')) {

                e.preventDefault();
                addToCartHandler();
            }
        });

        // --- ADD TO CART ---
        // Add to cart funksiyasi endi universal event delegation orqali ishlaydi

        // Sahifa yuklanganda ishga tushirish
        document.addEventListener('DOMContentLoaded', initializePage);


let small_price = document.querySelector(".small_price");

if (small_price && product.price) {
    small_price.textContent = ((product.aksiyaPrice-11)/100*localStorage.getItem("for_aksiya")).toFixed(2) + " ₾";
}

let totalPricePizaa = document.querySelector(".totalPricePizaa");

if (totalPricePizaa && product.price) {
    totalPricePizaa.textContent = ((product.aksiyaPrice)/100*localStorage.getItem("for_aksiya")).toFixed(2) + " ₾";
}

let totalPriceDiv = document.querySelector(".large_price");

if (totalPriceDiv && product.price) {
    totalPriceDiv.textContent = ((product.aksiyaPrice+12)/100*localStorage.getItem("for_aksiya")).toFixed(2) + " ₾";
}



function handleIngredientVisibility(){
    const product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
    const ingredientsCount = product.Ingredients || product.ingredients;

       if (ingredientsCount === "3" || ingredientsCount === 3) {
        document.getElementById('pizza3-1').style='display:block'
        document.getElementById('pizza3-2').style='display:block'
        document.getElementById('pizza3-3').style='display:block'
    }else if(ingredientsCount === "6" || ingredientsCount === 6){
        document.getElementById('pizza6-1').style='display:block'
        document.getElementById('pizza6-2').style='display:block'
        document.getElementById('pizza6-3').style='display:block'
        document.getElementById('pizza6-4').style='display:block'
        document.getElementById('pizza6-5').style='display:block'
        document.getElementById('pizza6-6').style='display:block'
    }else if(ingredientsCount === "5" || ingredientsCount === 5){
        document.getElementById('pizza5-1').style='display:block'
        document.getElementById('pizza5-2').style='display:block'
        document.getElementById('pizza5-3').style='display:block'
        document.getElementById('pizza5-4').style='display:block'
        document.getElementById('pizza5-5').style='display:block'
    }else if(ingredientsCount === "7" || ingredientsCount === 7){
        document.getElementById('pizza7-1').style='display:block'
        document.getElementById('pizza7-2').style='display:block'
        document.getElementById('pizza7-3').style='display:block'
        document.getElementById('pizza7-4').style='display:block'
        document.getElementById('pizza7-5').style='display:block'
        document.getElementById('pizza7-6').style='display:block'
        document.getElementById('pizza7-7').style='display:block'
    }else if(ingredientsCount === "4" || ingredientsCount === 4){
        document.getElementById('pizza4-1').style='display:block'
        document.getElementById('pizza4-2').style='display:block'
        document.getElementById('pizza4-3').style='display:block'
        document.getElementById('pizza4-4').style='display:block'
    }else if(ingredientsCount === "44" || ingredientsCount === 44){
        document.getElementById('pizza44-1').style='display:block'
        document.getElementById('pizza44-2').style='display:block'
        document.getElementById('pizza44-3').style='display:block'
        document.getElementById('pizza44-4').style='display:block'
    }

}
handleIngredientVisibility()