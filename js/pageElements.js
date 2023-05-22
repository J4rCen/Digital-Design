const docElements = document;

const navBar = docElements.querySelector("#nav-bar").offsetHeight;

const up = docElements.querySelector("#up")
const navCatFood = docElements.querySelector("#nav-catFood");
const navDogFood = docElements.querySelector("#nav-dogFood");
const navRodentsFood = docElements.querySelector("#nav-rodentsFood");

const sectionCatFood = docElements.querySelector("#cat-food").getBoundingClientRect().top
const sectionDogFood = docElements.querySelector("#dog-food").getBoundingClientRect().top;
const sectionRodentsFood = docElements.querySelector("#rodents-food").getBoundingClientRect().top;

const buyButton = docElements.querySelectorAll(".buy-button");

const basket = docElements.querySelector("#basket");
const basketForm = docElements.querySelector("#basket-form");
const basketImage = docElements.querySelector("#basket-image");
const basketBuy = docElements.querySelector("#basket-form-buy");
const basketClose = docElements.querySelector("#basket-form-close");
// const basketRadio = docElements.querySelectorAll(".basket-form-radio")