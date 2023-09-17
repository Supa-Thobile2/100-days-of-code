const inputFieldEl = document.getElementById("input-field");
let addButton = document.getElementById("add-button");

let shoppingListEl = document.getElementById("shopping-list")

addButton.addEventListener("click", function(){
    let inputValue = inputFieldEl.value;

    shoppingListEl.innerHTML += `<li>${inputValue}</li>`

    console.log(inputValue)
})