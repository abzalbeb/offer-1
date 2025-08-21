document.addEventListener('DOMContentLoaded', function () {
  // eski narxlarni chizish
  document.querySelectorAll(".product-price").forEach(el => {
    el.style = "color: rgb(0,0,0); font-size: 12px; font-weight: 500; text-decoration: line-through;";
  });

  // aksiya foizi (masalan localStorage: for_aksiya = 65 -> 65%)
  const discount = Number(localStorage.getItem("for_aksiya")) || 100;
  const k = discount / 100;

  // Agar bitta product bo'lsa:
  const productEl = document.querySelector(".product");
  if (productEl) {
    const price = Number(productEl.dataset.price || 0);
    const aksiyaPrice = (price * k).toFixed(2);

    // shu yerda dataset ichiga yozamiz
    productEl.dataset.aksiyaPrice = aksiyaPrice;
  }

  // Agar bir nechta narxlarni yangilamoqchi bo'lsangiz:
  const aksiyaPrices = document.querySelectorAll(".for_aksiyaPrice");
  const forPrices = document.querySelectorAll(".for_price");

  aksiyaPrices.forEach((el, i) => {
    const originalPrice = parseFloat(el.textContent.replace(/[^\d.]/g, "")) || 0; // "12.50₾" -> 12.50
    const newPrice = (originalPrice * k).toFixed(2);

    if (forPrices[i]) {
      forPrices[i].textContent = newPrice + "₾";
    }

    // tegishli .product elementiga ham yozib qo'yamiz
    const product = el.closest(".product");
    if (product) {
      product.dataset.aksiyaPrice = newPrice;
    }
  });
});
