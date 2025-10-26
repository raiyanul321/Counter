let plusBtn = document.querySelector(".counter .plusBtn");
let result = document.querySelector(".counter .result");

function addCart(){
    let newValue = Number(result.value) + 1;
    result.value = newValue;
    


}
plusBtn.addEventListener("click", addCart);

let minusBtn = document.querySelector(".minusBtn");

function removeCart(){
    if (result.value > 1){
    let newValue = Number(result.value) - 1;
    result.value = newValue;}
}
minusBtn.addEventListener("click", removeCart);


let onBtn = document.querySelector('onBtn')

