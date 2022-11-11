
const url = "https://fakestoreapi.com/products";

let data = fetch(url)

  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const cardID = data[i].id;
      const cardImg = data[i].image;
      const cardTitle = data[i].title;
      const cardPrice = data[i].price;
      const cardDesc = data[i].description;
    }
    

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

      function displayCart(){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products")
        let cartPrice = localStorage.getItem("totalPrice")
        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product">
                <span class="material-icons md-48">delete</span>
                    <img src="${item.image}" alt="">
                    <span>${item.title}</span>
                </div>
                <div class="price">$${item.price}</div>
                <div class="quantity">
                    <span class="material-icons md-48">add</span>
                    <span>${item.inCart}</span>
                    <span class="material-icons md-48" id="icons-incart">remove</span>
                </div>
                <div class="total">$${item.inCart * item.price}</div>
                `;
            });

            productContainer.innerHTML += `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cartPrice}</h4>
            </div>
            
            `;

        }
      }

      onLoadCartNumber();
      displayCart();
    
  });

