
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
    title: "საშუალო ზომა - 26 სმ 6 ცალი",
    price: parseFloat(product.price),
    ingredients: []
};
let selectedPizza = JSON.parse(JSON.stringify(defaultPizza));

// --- Default ingredients ---
const defaultDough = { id: "1001", title: "იტალიური თხელი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp", type: "dough" };
const defaultEdge = { id: "edge-default", title: "კლასიკური ზღვარი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp", type: "edge" };

// Default standard ingredients (data-id lardan olingan)
const defaultStandardIngredients7 = [
    { id: "230", title: "მოცარელა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mozarella.webp", type: "standard" },
    { id: "231", title: "სიმინდი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cornpng_parspng_com_8.webp", type: "standard" },
    { id: "232", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
    { id: "233", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
    { id: "235", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
    { id: "236", title: "შავი ზეთისხილი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/black%20olives.png", type: "standard" },
    { id: "237", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" }
];

const defaultStandardIngredients777 = [
  { id: "777", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "778", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
  { id: "779", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
  { id: "780", title: "ლორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "standard" },
  { id: "781", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
  { id: "782", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" },
  { id: "783", title: "პეპერონი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Pepperoni_t.png", type: "standard" }
]


const defaultStandardIngredients6 = [
    { id: "201", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "202", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "203", title: "ქათამი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Chicken_topping.webp", type: "standard" },
    { id: "204", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
    { id: "205", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" },
    { id: "206", title: "ტკბილი ჩილის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/20240831224905902_pizzasauce.webp", type: "standard" },
];
const defaultStandardIngredients666 = [
  { id: "666", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "667", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
  { id: "668", title: "პომიდორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tomato.png", type: "standard" },
  { id: "669", title: "ფეტა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/feta.webp", type: "standard" },
  { id: "669", title: "შავი ზეთისხილი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/black%20olives.png", type: "standard" },
  { id: "671", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" }
];

const defaultStandardIngredients5 = [
    { id: "220", title: "მოცარელა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mozarella.webp", type: "standard" },
    { id: "221", title: "ჩედარი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cheddar.webp", type: "standard" },
    { id: "222", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
    { id: "223", title: "გორგონზოლას ყველი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/gorgonzola.webp", type: "standard" },
    { id: "226", title: "ფეტა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/feta.webp", type: "standard" }
];

const defaultStandardIngredients3 = [
    { id: "207", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "208", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "209", title: "პეპერონი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Pepperoni_t.png", type: "standard" },
];

const defaultStandardIngredients4 = [
    { id: "240", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "241", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "242", title: "ლორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "standard" },
    { id: "243", title: "პეპერონი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png", type: "standard" }
];

const defaultStandardIngredients44 = [
    { id: "250", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "251", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "252", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
    { id: "253", title: "პეპერონი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png", type: "standard" }
];

const defaultStandardIngredients33 = [
    { id: "330", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "332", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "333", title: "პომიდორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tomato.png", type: "standard" }
];

const defaultStandardIngredients440 = [
    { id: "440", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
    { id: "441", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "standard" },
    { id: "442", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
    { id: "443", title: "ლორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "standard" }
];

const defaultStandardIngredients555 = [
  { id: "555", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "556", title: "სიმინდი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cornpng_parspng_com_8.webp", type: "standard" },
  { id: "557", title: "პომიდორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tomato.png", type: "standard" },
  { id: "558", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
  { id: "559", title: "თევზი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tuna_t.png", type: "standard" }
];

const defaultStandardIngredients66 = [
  { id: "66", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "67", title: "სიმინდი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cornpng_parspng_com_8.webp", type: "standard" },
  { id: "68", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
  { id: "69", title: "ქათამი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Chicken_topping.webp", type: "standard" },
  { id: "70", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
  { id: "71", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green%20pepper.png", type: "standard" }
];

const defaultStandardIngredients5555 = [
  { id: "5555", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "5556", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
  { id: "5557", title: "ლორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "standard" },
  { id: "5558", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
  { id: "5559", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green pepper.png", type: "standard" }
];

const defaultStandardIngredients9 = [
  { id: "990", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "standard" },
  { id: "991", title: "სიმინდი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/cornpng_parspng_com_8.webp", type: "standard" },
  { id: "992", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "standard" },
  { id: "994", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "standard" },
  { id: "995", title: "ლორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ham.webp", type: "standard" },
  { id: "996", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "standard" },
  { id: "997", title: "შავი ზეთისხილი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/black olives.png", type: "standard" },
  { id: "998", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green pepper.png", type: "standard" },
  { id: "999", title: "პეპერონი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Pepperoni_t.png", type: "standard" }
];


const defaultStandardIngredients8 = [
  { id: "890", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "topping" },
  { id: "881", title: "პიცის სოუსი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/pizza_sauce.webp", type: "topping" },
  { id: "882", title: "ქათამი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Chicken_topping.webp", type: "topping" },
  { id: "884", title: "პომიდორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tomato.png", type: "topping" },
  { id: "885", title: "სოკო", price: 0, img: "https://deykvccewcmn1.cloudfront.net/mushroom.png", type: "topping" },
  { id: "886", title: "ხახვი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/spanish-onion.webp", type: "topping" },
  { id: "887", title: "მწვანე წიწაკა", price: 0, img: "https://deykvccewcmn1.cloudfront.net/green pepper.png", type: "topping" },
  { id: "888", title: "პეპერონი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/Pepperoni_t.png", type: "topping" }
];


const defaultStandardIngredients4444 = [
  { id: "4444", title: "მოცარელა", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp", type: "topping" },
  { id: "4441", title: "პიცის სოუსი", price: 0, img: "https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp", type: "topping" },
  { id: "4442", title: "პომიდორი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/tomato.png", type: "topping" },
  { id: "4443", title: "რანჩო ტირიფი", price: 0, img: "https://deykvccewcmn1.cloudfront.net/ranch.webp", type: "topping" }
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
    else if (ingredientsCount === "4" || ingredientsCount === 4) {
        return defaultStandardIngredients4;
    } 
    else if (ingredientsCount === "44" || ingredientsCount === 44) {
        return defaultStandardIngredients44;
    } 
    else if (ingredientsCount === "33" || ingredientsCount === 33) {
        return defaultStandardIngredients44;
    } 
    else if (ingredientsCount === "444" || ingredientsCount === 444) {
        return defaultStandardIngredients440;
    } else if (ingredientsCount === "666" || ingredientsCount === 666) {
        return defaultStandardIngredients666;
    } else if (ingredientsCount === "777" || ingredientsCount === 777) {
        return defaultStandardIngredients777;
    }else if (ingredientsCount === "555" || ingredientsCount === 555) {
        return defaultStandardIngredients555;
    }else if (ingredientsCount === "66" || ingredientsCount === 66) {
        return defaultStandardIngredients66;
    }
    else if (ingredientsCount === "5555" || ingredientsCount === 5555) {
        return defaultStandardIngredients5555;
    }
    else if (ingredientsCount === "9" || ingredientsCount === 9) {
        return defaultStandardIngredients9;
    } else if (ingredientsCount === "8" || ingredientsCount === 8) {
        return defaultStandardIngredients8;
    }
    else if (ingredientsCount === "4444" || ingredientsCount === 4444) {
        return defaultStandardIngredients8;
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
        extraText.textContent = `დამატებითი ინგრედიენტები: ${ingredient.title}`;

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

// --- YANGI EDIT FUNKSIYALARI ---

// Edit holatini tekshirish va ma'lumotlarni qayta tiklash funksiyasi


// Edit holatini tekshirish va ma'lumotlarni qayta tiklash funksiyasi
// Edit holatini tekshirish va ma'lumotlarni qayta tiklash funksiyasi
function restoreEditData() {
    const isEditMode = localStorage.getItem('edit') === 'true';
    const editOrderData = JSON.parse(localStorage.getItem('editOrderData')) || null;
    
    if (!isEditMode || !editOrderData) {
        return false; // Edit rejimi emas
    }
    
    console.log('Edit rejimi faol. Ma\'lumotlarni tiklamoqda...', editOrderData);
    
    // 1. Count ni qayta tiklash
    if (editOrderData.quantity) {
        count = editOrderData.quantity;
        const countElement = document.getElementById("count");
        if (countElement) {
            countElement.textContent = count;
        }
        console.log('Count qayta tiklandi:', count);
    }
    
    // 2. Pizza size ni qayta tiklash
    if (editOrderData.pizzas && editOrderData.pizzas[0]) {
        const savedPizzaSize = editOrderData.pizzas[0].title;
        console.log('Saqlangan pizza size:', savedPizzaSize);

        document.querySelectorAll(".pizza_size_select").forEach(el => {
            // Avval hamma class va svg ni tozalaymiz
            el.classList.remove("active");
            const svgIcon = el.querySelector("svg");
            if (svgIcon) svgIcon.style.display = "none";

            const elSize = el.dataset.size || el.textContent.trim();
            if (
                elSize === savedPizzaSize ||
                elSize.includes(savedPizzaSize) ||
                savedPizzaSize.includes(elSize)
            ) {
                // Active holat
                el.classList.add("active");
                if (svgIcon) svgIcon.style.display = "inline-block";

                selectedPizza.id = el.dataset.id || selectedPizza.id;
                selectedPizza.title = el.dataset.size || savedPizzaSize;
                selectedPizza.price = parseFloat(el.dataset.price) || selectedPizza.price;

                console.log('Pizza size qayta tiklandi:', savedPizzaSize);
            }
        });
    }
    
    // 3. Ingredients ni qayta tiklash
    if (editOrderData.pizzas && editOrderData.pizzas[0] && editOrderData.pizzas[0].ingredients) {
        const savedIngredients = editOrderData.pizzas[0].ingredients;
        console.log('Saqlangan ingredients:', savedIngredients);
        
        // Avval barcha active classlarni olib tashlash
        document.querySelectorAll(".for_active_0, .for_active_2").forEach(el => {
            el.classList.remove("for_active_0", "for_active_2");
        });
        
        // Selected pizza ingredients ni tozalash
        selectedPizza.ingredients = [];
        
        // Default dough va edge qayta qo'shish
        setIngredient(defaultDough);
        setIngredient(defaultEdge);
        updateDoughSelection();
        
        // YANGI: editOrderData.ingredients raqami bo'yicha default ingredients ni aniqlash
        const ingredientsNumber = editOrderData.ingredients;
        console.log('Edit order ingredients raqami:', ingredientsNumber);
        
        let defaultIngredientsForThisProduct = [];
        
        // editOrderData.ingredients raqamiga qarab to'g'ri default ingredients tanlash
        if (ingredientsNumber === "6" || ingredientsNumber === 6) {
            defaultIngredientsForThisProduct = defaultStandardIngredients6;
        } else if (ingredientsNumber === "3" || ingredientsNumber === 3) {
            defaultIngredientsForThisProduct = defaultStandardIngredients3;
        } else if (ingredientsNumber === "5" || ingredientsNumber === 5) {
            defaultIngredientsForThisProduct = defaultStandardIngredients5;
        } else if (ingredientsNumber === "7" || ingredientsNumber === 7) {
            defaultIngredientsForThisProduct = defaultStandardIngredients7;
        } else if (ingredientsNumber === "4" || ingredientsNumber === 4) {
            defaultIngredientsForThisProduct = defaultStandardIngredients4;
        } else if (ingredientsNumber === "44" || ingredientsNumber === 44) {
            defaultIngredientsForThisProduct = defaultStandardIngredients44;
        } else if (ingredientsNumber === "33" || ingredientsNumber === 33) {
            defaultIngredientsForThisProduct = defaultStandardIngredients33;
        } else if (ingredientsNumber === "444" || ingredientsNumber === 444) {
            defaultIngredientsForThisProduct = defaultStandardIngredients440;
        } else if (ingredientsNumber === "666" || ingredientsNumber === 666) {
            defaultIngredientsForThisProduct = defaultStandardIngredients666;
        } else if (ingredientsNumber === "777" || ingredientsNumber === 777) {
            defaultIngredientsForThisProduct = defaultStandardIngredients777;
        } else if (ingredientsNumber === "555" || ingredientsNumber === 555) {
            defaultIngredientsForThisProduct = defaultStandardIngredients555;
        } else if (ingredientsNumber === "66" || ingredientsNumber === 66) {
            defaultIngredientsForThisProduct = defaultStandardIngredients66;
        } else if (ingredientsNumber === "5555" || ingredientsNumber === 5555) {
            defaultIngredientsForThisProduct = defaultStandardIngredients5555;
        } else if (ingredientsNumber === "9" || ingredientsNumber === 9) {
            defaultIngredientsForThisProduct = defaultStandardIngredients9;
        } else if (ingredientsNumber === "8" || ingredientsNumber === 8) {
            defaultIngredientsForThisProduct = defaultStandardIngredients8;
        } else if (ingredientsNumber === "4444" || ingredientsNumber === 4444) {
            defaultIngredientsForThisProduct = defaultStandardIngredients4444;
        } else {
            // Default holatda 6 ta ingredientni qaytarish
            defaultIngredientsForThisProduct = defaultStandardIngredients6;
        }
        
        console.log('Bu mahsulot uchun default ingredients:', defaultIngredientsForThisProduct);
        
        // Standard ingredients va extra ingredients ni ajratish
        const standardIngredientsToAdd = [];
        const extraIngredientsToAdd = [];
        
        savedIngredients.forEach(savedItem => {
            console.log('Tekshirilayotgan ingredient:', savedItem);
            
            // Default ingredients ro'yxatida bor-yo'qligini tekshirish
            const isDefaultStandard = defaultIngredientsForThisProduct.some(defItem => 
                defItem.title.toLowerCase().trim() === savedItem.name.toLowerCase().trim()
            );
            
            const isDefaultDough = defaultDough.title.toLowerCase().trim() === savedItem.name.toLowerCase().trim();
            const isDefaultEdge = defaultEdge.title.toLowerCase().trim() === savedItem.name.toLowerCase().trim();
            
            // Agar default ingredient bo'lmasa va dough/edge ham bo'lmasa, demak bu extra ingredient
            if (!isDefaultStandard && !isDefaultDough && !isDefaultEdge) {
                console.log('Extra ingredient topildi:', savedItem.name);
                extraIngredientsToAdd.push(savedItem);
            } else if (isDefaultStandard) {
                console.log('Standard ingredient topildi:', savedItem.name);
                standardIngredientsToAdd.push(savedItem);
            }
        });
        
        // Standard ingredients ni qayta tiklash
        if (standardIngredientsToAdd.length > 0) {
            console.log('Standard ingredients tiklanmoqda:', standardIngredientsToAdd);
            
            // Saqlangan standard ingredientlarni active qilish
            standardIngredientsToAdd.forEach(savedItem => {
                // Default ingredients ichidan to'g'ri ID ni topish
                const matchedDefault = defaultIngredientsForThisProduct.find(defItem => 
                    defItem.title.toLowerCase().trim() === savedItem.name.toLowerCase().trim()
                );
                
                if (matchedDefault) {
                    // Element topish va active qilish
                    const standardElement = document.querySelector(`.for_vibor_2[data-id="${matchedDefault.id}"]`);
                    
                    if (standardElement) {
                        standardElement.classList.add("for_active_2");
                        setIngredient(matchedDefault);
                        console.log('Standard ingredient qayta qo\'shildi:', matchedDefault);
                    } else {
                        console.warn('Standard ingredient elementi topilmadi:', matchedDefault.id, savedItem.name);
                    }
                }
            });
        } else {
            // Agar saqlangan standard ingredients yo'q bo'lsa, default larni qo'yish
            console.log('Saqlangan standard ingredients yo\'q, default larni qo\'yapmiz');
            defaultIngredientsForThisProduct.forEach(item => {
                setIngredient(item);
                const element = document.querySelector(`.for_vibor_2[data-id="${item.id}"]`);
                if (element) {
                    element.classList.add("for_active_2");
                } else {
                    console.warn('Default ingredient elementi topilmadi:', item.title, item.id);
                }
            });
        }
        
        // Extra ingredients ni qayta tiklash
        extraIngredientsToAdd.forEach(savedItem => {
            // Extra ingredient elementini topish - data-title bilan
            let extraElement = document.querySelector(`.for_vibor_0[data-title="${savedItem.name}"]`);
            
            if (!extraElement) {
                // Agar data-title bilan topilmasa, boshqa usul bilan sinash
                const allExtraElements = document.querySelectorAll('.for_vibor_0');
                allExtraElements.forEach(el => {
                    const elTitle = el.dataset.title || el.querySelector('span')?.textContent?.trim() || '';
                    if (elTitle.toLowerCase().trim() === savedItem.name.toLowerCase().trim()) {
                        extraElement = el;
                    }
                });
            }
            
            if (extraElement) {
                extraElement.classList.add("for_active_0");
                
                // Extra ingredient obyektini yaratish
                const extraIngredient = {
                    id: generateExtraIngredientId(savedItem.name),
                    title: savedItem.name,
                    price: savedItem.price || 0,
                    img: extraElement.dataset.img || extraElement.querySelector('img')?.src || '',
                    type: "extra"
                };
                
                setIngredient(extraIngredient);
                console.log('Extra ingredient qayta qo\'shildi:', extraIngredient);
            } else {
                console.warn('Extra ingredient elementi topilmadi:', savedItem.name);
            }
        });
    }
    
    // 4. Narxlarni yangilash
    updateTotalPrice();
    
    console.log('Edit ma\'lumotlari muvaffaqiyatli tiklandi');
    console.log('Hozirgi selectedPizza:', selectedPizza);
    console.log('Hozirgi count:', count);
    
    return true;
}



// Event handler funksiyalar
function handleExtraIngredientClick() {
    const title = this.dataset.title;
    const id = generateExtraIngredientId(title);
    const priceStr = this.dataset.price || "+0₾";
    const price = parseFloat(priceStr.replace(/[^\d.]/g, '')) || 0;
    const img = this.querySelector('img')?.src || '';

    const isActive = this.classList.contains("for_active_0");

    if (isActive) {
        this.classList.remove("for_active_0");
        removeIngredientById(id);
        console.log(`${title} olib tashlandi`);
    } else {
        const currentExtraCount = selectedPizza.ingredients.filter(i => i.type === "extra").length;

        if (currentExtraCount < maxExtraIngredients) {
            this.classList.add("for_active_0");
            setIngredient({ id, title, price, img, type: "extra" });
            console.log(`${title} qo'shildi. Extra ingredients soni: ${currentExtraCount + 1}`);
        } else {
            const errorPopup = document.querySelector('#Toastify-nostore');
            if (errorPopup) {
                errorPopup.style.setProperty('display', 'flex', 'important');
                setTimeout(() => {
                    errorPopup.style.setProperty('display', 'none', 'important');
                }, 2200);
            }
        }
    }

    console.log('Hozirgi ingredients:', selectedPizza.ingredients);
    updateTotalPrice();
}

function handleStandardIngredientClick() {
    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = parseFloat(this.dataset.price) || 0;
    const img = this.dataset.img;

    const isActive = this.classList.contains("for_active_2");

    if (isActive) {
        this.classList.remove("for_active_2");
        removeIngredientById(id);
    } else {
        this.classList.add("for_active_2");
        setIngredient({ id, title, price, img, type: "standard" });
    }

    // Faqat clicked bo'lgan element bilan ishlash
    const allDefaultIds = defaultStandardIngredients.map(item => item.id);
    const standardItems = document.querySelectorAll(".for_vibor_2");
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
}

function handleDoughClick() {
    const newDough = {
        id: this.dataset.id,
        title: this.dataset.title,
        price: parseFloat(this.dataset.price) || 0,
        img: this.dataset.img,
        type: "dough"
    };

    setIngredient(newDough);
    updateDoughSelection();
    updateTotalPrice();
}

function handleEdgeClick() {
    setIngredient({
        id: this.dataset.id,
        title: this.dataset.title,
        price: parseFloat(this.dataset.price) || 0,
        img: this.dataset.img,
        type: "edge"
    });
    updateTotalPrice();
}

function handlePizzaSizeClick() {
    document.querySelectorAll(".pizza_size_select").forEach(p => p.classList.remove("active"));
    this.classList.add("active");
    selectedPizza.id = this.dataset.id || selectedPizza.id;
    selectedPizza.title = this.dataset.size || selectedPizza.title;
    selectedPizza.price = parseFloat(this.dataset.price || selectedPizza.price);
    updateTotalPrice();
}

// Event listener larni o'rnatish funksiyasi
function setupEventListeners() {
    // Extra ingredients event listeners (for_vibor_0)
    const extraItems = document.querySelectorAll(".for_vibor_0");
    extraItems.forEach(el => {
        el.removeEventListener("click", handleExtraIngredientClick);
        el.addEventListener("click", handleExtraIngredientClick);
    });

    // Standard ingredients event listeners
    const standardItems = document.querySelectorAll(".for_vibor_2");
    standardItems.forEach(el => {
        el.removeEventListener("click", handleStandardIngredientClick);
        el.addEventListener("click", handleStandardIngredientClick);
    });

    // Dough tanlash
    document.querySelectorAll(".for_vibor").forEach(el => {
        el.removeEventListener("click", handleDoughClick);
        el.addEventListener("click", handleDoughClick);
    });

    // Edge tanlash
    document.querySelectorAll(".for_vibor_edge").forEach(el => {
        el.removeEventListener("click", handleEdgeClick);
        el.addEventListener("click", handleEdgeClick);
    });

    // Pizza size tanlash
    document.querySelectorAll(".pizza_size_select").forEach(el => {
        el.removeEventListener("click", handlePizzaSizeClick);
        el.addEventListener("click", handlePizzaSizeClick);
    });
}

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

    // Edit holatini tekshirish
    const isEditRestored = restoreEditData();
    
    if (!isEditRestored) {
        // Faqat edit rejimi bo'lmaganda default ma'lumotlarni yuklash
        
        // 1) Default dough va edge qo'shish
        setIngredient(defaultDough);
        setIngredient(defaultEdge);
        updateDoughSelection();

        // 2) Default standard ingredients qo'shish
        defaultStandardIngredients.forEach(item => setIngredient(item));
    }

    // Event listener larni o'rnatish (har doim kerak)
    setupEventListeners();
    
    // Ingredient visibility ni boshqarish
    handleIngredientVisibility();
    
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

    // Edit rejimini tekshirish
    const isEditMode = localStorage.getItem('edit') === 'true';
    const editOrderId = localStorage.getItem('for_id');

    let cart = JSON.parse(localStorage.getItem('orders')) || [];

    if (isEditMode && editOrderId) {
        // Edit rejimi - mavjud buyurtmani yangilash
        const orderIndex = cart.findIndex(o => o.id == editOrderId);
        if (orderIndex !== -1) {
            cart[orderIndex] = cartProduct;
            console.log("Buyurtma yangilandi:", cartProduct);
        } else {
            console.error("Tahrirlash uchun buyurtma topilmadi!");
            return;
        }
        
        // Edit rejimini to'xtatish
        localStorage.removeItem('edit');
        localStorage.removeItem('for_id');
        localStorage.removeItem('editOrderData');
        localStorage.removeItem('selectedPizzaSize');
        
        console.log('Edit rejimi to\'xtatildi');
    } else {
        // Oddiy rejim - yangi buyurtma qo'shish
        cart.push(cartProduct);
        console.log("Yangi buyurtma qo'shildi:", cartProduct);
    }

    localStorage.setItem('orders', JSON.stringify(cart));
    console.log("Hozirgi cart:", cart);

    const toast = document.querySelector('#Toastify-success');
    if (toast) {
        // Toastni ko'rsatish
        toast.style.setProperty('display', 'flex', 'important');

        // 2 sekunddan keyin toastni yashirish va success ni o'chirish
        setTimeout(() => {
            toast.style.setProperty('display', 'none', 'important');
            window.location.href = '../pizza/'
        }, 2200);
    } else {
        // Agar toast yo'q bo'lsa to'g'ridan-to'g'ri yo'naltirish
        setTimeout(() => {
            window.location.href = '../pizza/'
        }, 500);
    }
}

let lastClickTime = 0;
const CLICK_DELAY = 2100; // 2 sekund

// EVENT DELEGATION - barcha Add to Cart tugmalar uchun
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('addToCartBtn') ||
        e.target.closest('.addToCartBtn')) {

        e.preventDefault();
        
        const currentTime = Date.now();
        
        // Agar oxirgi click dan 2 sekund o'tmagan bo'lsa, hech narsa qilmaslik
        if (currentTime - lastClickTime < CLICK_DELAY) {
            console.log('Too fast! Please wait...');
            return;
        }
        
        lastClickTime = currentTime;
        addToCartHandler();
    }
});

// --- Narx elementlarini yangilash ---
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

// --- Ingredient Visibility funksiyasi ---
function handleIngredientVisibility(){
    const product = JSON.parse(localStorage.getItem("selectedProduct")) || {};
    const ingredientsCount = product.Ingredients || product.ingredients;

    if (ingredientsCount === "3" || ingredientsCount === 3) {
        document.getElementById('pizza3-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza3-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza3-3')?.setAttribute('style', 'display:block');
    } else if(ingredientsCount === "6" || ingredientsCount === 6){
        document.getElementById('pizza6-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza6-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza6-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza6-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza6-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza6-6')?.setAttribute('style', 'display:block');
    } else if(ingredientsCount === "5" || ingredientsCount === 5){
        document.getElementById('pizza5-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5-5')?.setAttribute('style', 'display:block');
    } else if(ingredientsCount === "7" || ingredientsCount === 7){
        document.getElementById('pizza7-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-6')?.setAttribute('style', 'display:block');
        document.getElementById('pizza7-7')?.setAttribute('style', 'display:block');
    } else if(ingredientsCount === "4" || ingredientsCount === 4){
        document.getElementById('pizza4-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4-4')?.setAttribute('style', 'display:block');
    } else if(ingredientsCount === "44" || ingredientsCount === 44){
        document.getElementById('pizza44-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza44-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza44-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza44-4')?.setAttribute('style', 'display:block');
    }
    else if(ingredientsCount === "33" || ingredientsCount === 33){
        document.getElementById('pizza33-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza33-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza33-3')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "444" || ingredientsCount === 444){
        document.getElementById('pizza440-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza440-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza440-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza440-4')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "666" || ingredientsCount === 666){
        document.getElementById('pizza666-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza666-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza666-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza666-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza666-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza666-6')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "777" || ingredientsCount === 777){
        document.getElementById('pizza777-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-6')?.setAttribute('style', 'display:block');
        document.getElementById('pizza777-7')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "555" || ingredientsCount === 555){
        document.getElementById('pizza555-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza555-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza555-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza555-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza555-5')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "66" || ingredientsCount === 66){
        document.getElementById('pizza66-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza66-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza66-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza66-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza66-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza66-6')?.setAttribute('style', 'display:block');
    }
    else if(ingredientsCount === "5555" || ingredientsCount === 5555){
        document.getElementById('pizza5555-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5555-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5555-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5555-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza5555-5')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "9" || ingredientsCount === 9){
        document.getElementById('pizza9-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-6')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-7')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-8')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-9')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "8" || ingredientsCount === 8){
        document.getElementById('pizza9-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-4')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-5')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-6')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-7')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-8')?.setAttribute('style', 'display:block');
        document.getElementById('pizza9-9')?.setAttribute('style', 'display:block');
    }else if(ingredientsCount === "4444" || ingredientsCount === 4444){
        document.getElementById('pizza4444-1')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4444-2')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4444-3')?.setAttribute('style', 'display:block');
        document.getElementById('pizza4444-4')?.setAttribute('style', 'display:block');
    }
}

if (localStorage.getItem("edit") == "true") {
    for (let i = 0; i < document.querySelectorAll(".addToCart_btn").length; i++) {
        document.querySelectorAll(".addToCartBtn")[i].innerHTML = "Update cart"
    }
}

// --- Sahifa yuklanganda ishga tushirish ---
document.addEventListener('DOMContentLoaded', initializePage);

// --- Debug uchun ---
console.log('Pizza JavaScript yuklandi');
console.log('Product ma\'lumoti:', product);
console.log('Default standard ingredients:', defaultStandardIngredients);

// Edit rejimini tekshirish
if (localStorage.getItem('edit') === 'true') {
    console.log('Edit rejimi faol');
    console.log('Edit order data:', JSON.parse(localStorage.getItem('editOrderData')));
}