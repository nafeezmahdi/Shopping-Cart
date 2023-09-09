function addToCartList(){
    // console.log(this.value);
    // console.log(buttonElement[this.value-1].parentElement.firstElementChild.textContent);

    createLiElement = document.createElement("li");
    lineElement = document.createElement("p");
    createParagraphElement = document.createElement("p");
    const plusElement = document.createElement("button");
    plusElement.classList = "plus-btn";
    plusElement.innerText = " + ";
    // console.log(plusElement);
    // let plusProduct = document.getElementsByClassName("plus-btn");
    // for(let plusBtn of plusProduct)
    // {
    //   plusBtn.addEventListener("click", addOne);
    //   // console.log(plusBtn);
    // }
    productQuantity = document.createElement("span");
    productQuantity.innerText = 1;
    productQuantity.classList = "span-product";
    const minusElement = document.createElement("button");
    minusElement.classList = "minus-btn";
    minusElement.innerText = " - ";
    // let minusProduct = document.getElementsByClassName("minus-btn")
    // for(let minusBtn of minusProduct)
    // {
    //   minusBtn.addEventListener("click", minusOne);
    //   // console.log(minusBtn);
    // }
    // console.log(minusElement);
    createBtnElement = document.createElement("button");
    createBtnElement.innerText = "Remove";
    createBtnElement.classList = "remove-btn";

    
   
   createParagraphElement.innerText = buttonElement[this.value-1].parentElement.firstElementChild.textContent;
    // console.log(createParagraphElement);

   createLiElement.appendChild(lineElement);
   lineElement.appendChild(createParagraphElement);
   lineElement.appendChild(plusElement);
   lineElement.appendChild(productQuantity);
   lineElement.appendChild(minusElement);
   lineElement.appendChild(createBtnElement);
   
   cartListElement.appendChild(createLiElement);
  


  // console.log(createLiElement);
  // console.log(lineElement);


  // console.log(productQuantity);

  // console.log(createBtnElement);
  // console.log();


  let removeButtonElement = document.getElementsByClassName("remove-btn");
  // console.log(removeButtonElement);

  for(let removeBtn of removeButtonElement){
    removeBtn.addEventListener("click", removeLine);
    }
  
  






  // function removeLine(){
  //       console.log(removeButtonElement[0]);
  // }
  
  // for(let removeBtn of removeButtonElement){
  //   removeBtn.addEventListener("click", removeLine);
  // }
  
}





function removeLine(event){
 let removeElement = event.target.parentElement.parentElement;
 removeElement.remove();
}







