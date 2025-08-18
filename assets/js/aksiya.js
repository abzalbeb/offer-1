for (let i = 0; i < document.querySelectorAll(".product-price").length; i++) {
            document.querySelectorAll(".product-price")[i].style="color: rgb(0, 0, 0);font-size: 12px;font-weight: 500;text-decoration: line-through;"
            
        }


// mahsulot elementini olish
let productEl = document.querySelector(".product");

// oddiy narx
let price = Number(productEl.dataset.price);

// localStorage ichidagi aksiya foizi (masalan: 35 => discount = 65%)
let discount = Number(localStorage.getItem("for_aksiya")); // 65

// aksiya narxi hisoblash
let aksiyaPrice = (price * (discount / 100)).toFixed(2);

// product object tuzish
let aksiyaPrices = document.querySelectorAll(".for_aksiyaPrice");
let forPrices = document.querySelectorAll(".for_price");

aksiyaPrices.forEach((el, index) => {
    let originalPrice = Number(el.textContent.trim()); // narxni son qilish
    let newPrice = (originalPrice * (discount / 100)).toFixed(2);
    forPrices[index].textContent = newPrice+"₾";
});
