const Fruit = document.getElementById("fruit-main");
const AppleControl = document.getElementById("apple");
const OrangeControl = document.getElementById("orange");
const BananaControl = document.getElementById("banana");
const StrawControl = document.getElementById("straw");

AppleControl.addEventListener('click', () =>{AppleFunction()});
OrangeControl.addEventListener('click', () =>{OrangeFunction()});
BananaControl.addEventListener('click', () =>{BananaFunction()});
StrawControl.addEventListener('click', () =>{StrawFunction()});

const AppleFunction = () =>{
    Fruit.src = "./img/apple-slice.png";
}

const OrangeFunction = () =>{
    Fruit.src = "./img/orange-slice.png";
}

const BananaFunction = () =>{
    Fruit.src = "./img/banana-slice.png";
}

const StrawFunction = () =>{
    Fruit.src = "./img/straw-slice.png";
}