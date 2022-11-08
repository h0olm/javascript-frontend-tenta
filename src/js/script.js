const cardItems = document.querySelector(".cardItems");

const url = "https://fakestoreapi.com/products";

let output = "";

let data = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const cardID = data[i].id;
      const cardImg = data[i].image;
      const cardTitle = data[i].title;
      const cardPrice = data[i].price;
      const cardDesc = data[i].description;

      output += `
      <div id="card">
      <img src="${data[i].image}" alt="" id="card-img" />
      <div>
        <h1 class="card-title">${data[i].title}</h1>
        <h2 class="card-desc">${data[i].description}</h2>
      </div>


      <div class="card-item-add">
        <a onclick="mouseClickSound.play()" class="material-icons md-48" id="item-add-icon">add_shopping_cart</a>
       <button class="showMore" >Details</button>
      </div>
    </div>

    `;
    }
    cardItems.innerHTML = output;
  });

  







var shoppingCartIcon = document.getElementById("shopping-cart-icon");
var mouseClickSound = new Audio();
mouseClickSound.src = "/audio/mouseclick.mp3";