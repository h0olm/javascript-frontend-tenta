var itemAddIcon = document.getElementsByClassName("card-item-add");
var shoppingCartIcon = document.getElementById("shopping-cart-icon");
var mouseClickSound = new Audio();
mouseClickSound.src = "/audio/mouseclick.mp3"

itemAddIcon.addEventListener("click", () => {
    alert("Hello! I am an alert box!!");
    shoppingCartIcon.classList.add("itemAdd");
    if (shoppingCartIcon.className == "itemAdd") {

        setTimeout(() => { shoppingCartIcon.classList.add("itemAdded"); }, 200);
        setTimeout(() => { shoppingCartIcon.classList.remove("itemAdded", "itemAdd"); }, 300);
    }
})


//var itemAddIcon = document.getElementById("item-add-icon");
//var shoppingCartIcon = document.getElementById("shopping-cart-icon");
//var mouseClickSound = new Audio();
//mouseClickSound.src = "/audio/mouseclick.mp3"

//itemAddIcon.addEventListener("click", () => {
//   shoppingCartIcon.classList.toggle("itemAdd");
//     if(shoppingCartIcon.className == "itemAdd"){

//       setTimeout(() => { shoppingCartIcon.classList.toggle("itemAdded"); }, 200);
//      setTimeout(() => { shoppingCartIcon.classList.remove("itemAdded", "itemAdd" ); }, 300);
//   }
//})

