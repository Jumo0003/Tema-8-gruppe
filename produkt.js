// Hent id fra URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

// DummyJSON API URL
const productURL = `https://dummyjson.com/products/${id}`;

// Container til produkt
const productcontainer = document.querySelector("#productContainer");

console.log(productcontainer);

// Fetch data
function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

// Vis data
function show(data) {
  console.log("mine data er", data);

  productcontainer.innerHTML = `
    <article class="product1">
      <img src="${data.thumbnail}" alt="${data.title}">
      
      <div class="tekst">
        <h2>${data.title}</h2>
        
        <p>${data.description}</p>
        
        <p>Pris: ${data.price} USD</p>
        
        <p>Rating: ${data.rating}</p>
        
        <p>Lagerstatus: ${data.availabilityStatus}</p>
        
        <p>Brand: ${data.brand}</p>
        
        <a href="#">Add To Basket</a>
      </div>
    </article>
  `;
}

// Kør funktion
getData();
