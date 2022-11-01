const url = 'https://fakestoreapi.com/products';

let data = fetch(url)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.lenth; i++) {
            console.log(data[i])
        }

    })






var itemAddIcon = document.getElementById("item-add-icon");
var shoppingCartIcon = document.getElementById("shopping-cart-icon");
var mouseClickSound = new Audio();
mouseClickSound.src = "/audio/mouseclick.mp3"

itemAddIcon.addEventListener("click", () => {
    shoppingCartIcon.classList.toggle("itemAdd");
    if (shoppingCartIcon.className == "itemAdd") {

        setTimeout(() => { shoppingCartIcon.classList.toggle("itemAdded"); }, 200);
        setTimeout(() => { shoppingCartIcon.classList.remove("itemAdded", "itemAdd"); }, 300);
    }
})

