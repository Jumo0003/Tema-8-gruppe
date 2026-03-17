console.log("produktliste hentet");

//knapper
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
const showAllBtn = document.querySelector("#showAllBtn");

const listContainer = document.querySelector("#productListContainer");
let allProducts = [];

// Hent kategorier fra URL
const params = new URLSearchParams(window.location.search);
const categories = params.getAll("category");

// Hent produkter — håndterer både én og flere kategorier
function getProducts() {
  if (categories.length === 0) {
    // Ingen kategori i URL — hent alle produkter
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        allProducts = data.products;
        showProducts(allProducts);
      });
  } else if (categories.length === 1) {
    // Én kategori i URL
    fetch(`https://dummyjson.com/products/category/${categories[0]}`)
      .then((res) => res.json())
      .then((data) => {
        allProducts = data.products;
        showProducts(allProducts);
      });
  } else {
    // Flere kategorier i URL
    const fetches = categories.map((cat) => fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => res.json()));

    Promise.all(fetches).then((results) => {
      allProducts = results.flatMap((result) => result.products);
      showProducts(allProducts);
    });
  }
}

// Sorter efter pris
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}

// Filtrer kategori
function filterByCategory(targetCategory) {
  const filtered = allProducts.filter((product) => product.category.toLowerCase() === targetCategory.toLowerCase());
  showProducts(filtered);
}

//funktion til at bygge specifikke filtreringsknapper
function buildFilterButtons(products) {
  const categories = [...new Set(products.map((p) => p.category))];
  const filterContainer = document.querySelector("#filterButtons");
  filterContainer.innerHTML = "";

  categories.forEach((category) => {
    filterContainer.innerHTML += `
      <button class="filterBtn">${category}</button>
    `;
  });

  document.querySelectorAll(".filterBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterByCategory(btn.textContent);
    });
  });
}

function getProducts() {
  if (categories.length === 0) {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        allProducts = data.products;
        buildFilterButtons(allProducts); // ← her
        showProducts(allProducts);
      });
  } else if (categories.length === 1) {
    fetch(`https://dummyjson.com/products/category/${categories[0]}`)
      .then((res) => res.json())
      .then((data) => {
        allProducts = data.products;
        buildFilterButtons(allProducts); // ← her
        showProducts(allProducts);
      });
  } else {
    const fetches = categories.map((cat) => fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => res.json()));
    Promise.all(fetches).then((results) => {
      allProducts = results.flatMap((result) => result.products);
      buildFilterButtons(allProducts); // ← her
      showProducts(allProducts);
    });
  }
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
          <a href="product.html?id=${product.id}">Køb</a>
        </div>
      </article>
    `;
  });
}

//eventlisteners
sortByPriceBtn.addEventListener("click", sortByPriceAsc);
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
