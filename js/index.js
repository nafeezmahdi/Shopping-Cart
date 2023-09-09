const cartListElement = document.getElementById("list-of-product");
let buttonElement = document.getElementsByClassName("add-cart");


// console.log(cartListElement);
// console.log(buttonElement);

let createLiElement;
let lineElement;
let createParagraphElement;
let productQuantity;
let createBtnElement;
let addingValue;

let productItemQuantity = 1;


for(let elementBtn of buttonElement){
    elementBtn.addEventListener("click", addToCartList)
}











// let btns = document.querySelectorAll('button');

// for (i of btns) {
//   i.addEventListener('click', function() {
//     console.log(this);
//   });
// }