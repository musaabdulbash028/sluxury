const cart = [];
const countElement = document.querySelector("#cart-count");
const totalElement = document.querySelector("#cart-total");
const clearButton = document.querySelector("#clear-cart");

function updateCart() {
  countElement.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalElement.textContent = `$${total.toFixed(2)}`;
}

document.querySelectorAll(".cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    cart.push({ name, price });
    updateCart();

    const originalText = "🛒 ADD TO CART";
    button.textContent = "✓ ADDED TO CART";
    button.classList.add("added");
    window.setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("added");
    }, 1000);
  });
});

clearButton.addEventListener("click", () => {
  cart.length = 0;
  updateCart();
});

document.querySelector("#year").textContent = new Date().getFullYear();
