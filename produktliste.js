console.log("produktliste hentet");

//knapper
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
const showAllBtn = document.querySelector("#showAllBtn");

const listContainer = document.querySelector("#productListContainer");
let allProducts = [];

// Hent kategorier fra URL
const params = new URLSearchParams(window.location.search);
const categories = params.getAll("category");

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

/*herobanner*/
const categoryTitles = {
  beauty: "Beauty",
  fragrances: "Fragrances",
  "skin-care": "Skin Care",
  "mens-watches": "Accessories",
  sunglasses: "Accessories",
  "womens-jewellery": "Accessories",
};

function setTitle(text) {
  document.getElementById("product-title").textContent = text;
}

// params er allerede defineret tidligere i filen
const category = params.get("category");

const titel = categoryTitles[category];
setTitle(titel);

/*herobanner stop*/

// Vis produkter
function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <article class="productCard">
        <img class="img-produkt" src="${product.thumbnail}" alt="${product.title}" />

        <div class="badges">
          ${product.stock < 10 ? `<p class="badge soldout">Low stock</p>` : ""}
          ${product.price < 20 ? `<p class="badge discount">Sale</p>` : ""}
        </div>

        <div class="tekst">
          <h3>${product.title}</h3>
          <p>${product.category}</p>
          <p>${product.price} USD</p>
          <a class="buttonKoeb" href="produkt.html?id=${product.id}">Tilføj til kurv</a>
          <a href="produkt.html?id=${product.id}"></a>
        </div>
      </article>
    `;
  });
}

//eventlisteners
sortByPriceBtn.addEventListener("click", sortByPriceAsc);
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
