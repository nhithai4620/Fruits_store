const Fruit = document.getElementById("fruit-main");
const AppleControl = document.getElementById("apple");
const OrangeControl = document.getElementById("orange");
const BananaControl = document.getElementById("banana");
const StrawControl = document.getElementById("straw");
const BackgroundLayout = document.querySelector(".hero");
const SellContent = document.querySelector(".sell-content");
const SellLogan = document.querySelector(".sell-logan");
const r = document.querySelector(':root');

AppleControl.addEventListener('click', () =>{AppleFunction()});
OrangeControl.addEventListener('click', () =>{OrangeFunction()});
BananaControl.addEventListener('click', () =>{BananaFunction()});
StrawControl.addEventListener('click', () =>{StrawFunction()});

const AppleFunction = () =>{
    Fruit.src = "./img/apple-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/apple_bg.png')";
    r.style.setProperty('--main-color', '#96e001');
    SellContent.innerHTML = "Usually eaten raw, Apples can also be used in various recipes, juices, and drinks. Various types abound, with a variety of colors and sizes";
    SellLogan.innerHTML = "Gifts ...<br> from nature";
}

const OrangeFunction = () =>{
    Fruit.src = "./img/orange-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/orange_bg.png')";
    r.style.setProperty('--main-color', '#f9b033');
    SellContent.innerHTML = "Orange is not just a tasty fruit, its more. Get to know the multiple health benefits of adding oranges in your daily diet";
    SellLogan.innerHTML = "Eat Fresh<br> Stay Healthy...";
}

const BananaFunction = () =>{
    Fruit.src = "./img/banana-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/banana_bg.png')";
    r.style.setProperty('--main-color', '#f7e544');
    SellContent.innerHTML = "Bananas are a meltingly delicious snack that are enjoyed by everyone all year-round";
    SellLogan.innerHTML = "Better than... <br> your husband's";
}

const StrawFunction = () =>{
    Fruit.src = "./img/straw-slice.png";
    BackgroundLayout.style.backgroundImage = "url('./img/straw_bg.png')";
    r.style.setProperty('--main-color', '#f07753');
    SellContent.innerHTML = "Strawberries are very rich in antioxidants and plant compounds, which may have benefits for heart health and blood sugar control";
    SellLogan.innerHTML = "Delicious taste <br> from the original";
}