const Fruit = document.getElementById("fruit-main");
const AppleControl = document.getElementById("apple");
const OrangeControl = document.getElementById("orange");
const BananaControl = document.getElementById("banana");
const StrawControl = document.getElementById("straw");
const BackgroundLayout = document.querySelector(".hero");
const r = document.querySelector(':root');

AppleControl.addEventListener('click', () =>{AppleFunction()});
OrangeControl.addEventListener('click', () =>{OrangeFunction()});
BananaControl.addEventListener('click', () =>{BananaFunction()});
StrawControl.addEventListener('click', () =>{StrawFunction()});

const AppleFunction = () =>{
    Fruit.src = "./img/apple-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/apple_bg.png')";
    r.style.setProperty('--main-color', '#96e001');
}

const OrangeFunction = () =>{
    Fruit.src = "./img/orange-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/orange_bg.png')";
    r.style.setProperty('--main-color', '#f9b033');
}

const BananaFunction = () =>{
    Fruit.src = "./img/banana-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/banana_bg.png')";
    r.style.setProperty('--main-color', '#f7e544');
}

const StrawFunction = () =>{
    Fruit.src = "./img/straw-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/straw_bg.png')";
    r.style.setProperty('--main-color', '#f07753');
}