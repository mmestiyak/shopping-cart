const cart = document.querySelector(".cart");
const total = document.querySelector(".total");
function sum() {
  let subTotalSum = 0;
  let cartItems = document.querySelectorAll("[data-price]");
  cartItems.forEach((item) => {
    subTotalSum += parseInt(item.innerText);
  });
  total.innerText = subTotalSum;
}

function updateInputValue(element, sum) {
  let input = element.closest("div").querySelector("input");
  let inputValue = Number(input.value);
  let price = element.closest(".col-md-5").querySelector("h5 span");
  let priceValue = Number(price.dataset.price);
  if (sum === "addition") {
    inputValue += 1;
    price.innerText = priceValue * inputValue;
  } else if (sum === "substraction") {
    if (input.value > 0) {
      inputValue -= 1;
      price.innerText = priceValue * inputValue;
    }
  }
  input.value = inputValue;
}

cart.addEventListener("click", function (e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("fa-plus")) {
    updateInputValue(clickedElement, "addition");
    sum();
  }
  if (clickedElement.classList.contains("fa-minus")) {
    updateInputValue(clickedElement, "substraction");
    sum();
  }
  if(clickedElement.classList.contains('remove-item')){
    clickedElement.closest('.cart-item').remove();
    sum()
 }
});
