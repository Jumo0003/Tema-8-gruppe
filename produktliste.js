console.log("produktliste hentet");

// Hent kategori fra URL
const params = new URLSearchParams(window.location.search);
const Mycategory = params.get("category");

// Knapper
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
const filterBeautyBtn = document.querySelector("#filterBeautyBtn"); // DummyJSON bruger category
const showAllBtn = document.querySelector("#showAllBtn");

// DummyJSON API
const listURL = Mycategory ? `https://dummyjson.com/products/category/${Mycategory}` : "https://dummyjson.com/products";

console.log(listURL);

const listContainer = document.querySelector("#productListContainer");
let allProducts = [];

// Hent produkter
function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      // DummyJSON har products inde i data.products
      allProducts = data.products;
      showProducts(allProducts);
    });
}

// Sorter efter pris
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);

// Filtrer kategori (fx beauty)
filterBeautyBtn.addEventListener("click", () => filterByCategory("beauty"));

showAllBtn.addEventListener("click", () => showProducts(allProducts));

// Filter funktion
function filterByCategory(targetCategory) {
  const filtered = allProducts.filter((product) => product.category.toLowerCase() === targetCategory.toLowerCase());
  showProducts(filtered);
}

// Vis produkter
function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <article class="productCard">

        <img src="${product.thumbnail}" alt="${product.title}" />

        <div class="badges">
          ${product.stock < 10 ? `<p class="badge soldout">Low stock</p>` : ""}
          ${product.price < 20 ? `<p class="badge discount">Billig</p>` : ""}
        </div>

        <div class="tekst">
          <h3>${product.title}</h3>
          <p>${product.category}</p>
          <p>${product.price} USD</p>
          <p>${product.brand}</p>

          <a href="product.html?id=${product.id}">Køb</a>
        </div>

      </article>
    `;
  });
}

// Kør
getProducts();
