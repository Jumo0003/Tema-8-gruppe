// Hent id fra URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

// DummyJSON API URL
const productURL = `https://dummyjson.com/products/${id}`;

// Container til produkt
const productcontainer = document.querySelector("#productContainer");

//stjerner
function visStjerner(rating) {
  const fyldte = Math.floor(rating);
  const decimal = rating - fyldte;
  const halvt = decimal >= 0.5 ? 1 : 0;
  const tomme = 5 - fyldte - halvt;

  return "★".repeat(fyldte) + (halvt === 1 ? "½" : "") + "☆".repeat(tomme);
}

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

        <p>${visStjerner(data.rating)}</p>
        
        <p>Tilgængelighed ${data.availabilityStatus}</p>
        
        <p>Produceret af ${data.brand}</p>
        
        <a href="#">Add To Basket</a>
        
      </div>
      <section>
  <h3>Reviews</h3>
  ${data.reviews
    .map(
      (review) => `
    <p>${review.reviewerName}</p>
    <p>${review.date}</p>
    <p>${review.comment}</p>
    <p>${visStjerner(data.rating)}</p>
  `,
    )
    .join("")}
</section>
    </article>
  `;
}

// Kør funktion
getData();
