var header = document.querySelector(".l-header");
var title = document.querySelector(".header-title");

header.addEventListener("click", () => {
  header.classList.toggle("l-header-is-active");
  title.classList.toggle("header-title-is-active");
});

var products = document.querySelectorAll(".product");

products.forEach((product, index) => {
  product.addEventListener("click", () => {
    product.classList.toggle(`product-is-active-${index + 1}`);
  });
});
