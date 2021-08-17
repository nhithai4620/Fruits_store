const ProductHeader = document.querySelector(".products");
const ProductContainer = document.querySelector(".product-main");


const Fruits = [
    {"name":"Apple", "price":"15", "src":"./img/apple-item.png"},
    {"name":"Banana", "price":"5", "src":"./img/banana-item.png"},
    {"name":"Strawberries", "price":"12", "src":"./img/straw-item.png"},
    {"name":"Melon", "price":"13", "src":"./img/melon-item.png"},
    {"name":"Watermelon", "price":"4", "src":"./img/watermelon-item.png"},
    {"name":"Orange", "price":"10", "src":"./img/orange-item.png"},
    {"name":"Grape", "price":"19", "src":"./img/grape-item.png"},
    {"name":"Durian", "price":"13", "src":"./img/durian-item.png"},
    {"name":"Blueberries", "price":"5", "src":"./img/banana-item.png"},
];


Fruits.forEach(element => console.log(element["name"]));


Fruits.forEach(element => {
    ProductContainer.innerHTML += element["name"] + '<br>';
} );