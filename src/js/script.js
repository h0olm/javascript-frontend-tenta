

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
      </div>


      <div class="card-item-add">
      <h2 class="card-price">${data[i].price}$</h2>
        <a class="material-icons md-48 add-cart cart${data[i].id}" id="item-add-icon">add_shopping_cart</a>
      </div>
    </div>

    `;
    }

  
    cardItems.innerHTML = output;
    let carts = cardItems.querySelectorAll(".add-cart");

    for (let i = 0; i < carts.length; i++) {
      data[i].inCart = 0;
      carts[i].addEventListener("click", () => {
        cartNumbers(data[i]);
        totalPrice(data[i]);
      });

      function onLoadCartNumber(){
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers){
          document.querySelector('.cartValue').textContent = productNumbers;
        }
      }

      function cartNumbers(product){
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if(productNumbers) {
          localStorage.setItem('cartNumbers', productNumbers + 1);
          document.querySelector('.cartValue').textContent = productNumbers + 1;
        }else {
          localStorage.setItem('cartNumbers', 1);
          document.querySelector('.cartValue').textContent = 1;
        }

        setItems(product);

      }

      function setItems(product){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if(cartItems != null) {
          if (cartItems[product.id] == undefined) {
            cartItems = {
              ...cartItems,
              [product.id]: product
            }
          }
          cartItems[product.id].inCart += 1;
        }else{
          product.inCart = 1;
          cartItems = {
            [product.id]: product
          }
        }

        localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
      }
      function totalPrice(product){
        let cartPrice = localStorage.getItem("totalPrice")
        

        if(cartPrice != null) {
          cartPrice = parseInt(cartPrice);
          localStorage.setItem("totalPrice", cartPrice + data[i].price);
        }else{
          localStorage.setItem("totalPrice", data[i].price)
        }

        
      }


      onLoadCartNumber();

    }
  });
