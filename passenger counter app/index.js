// document.getElementById("count-el").innerHTML = 5

// initialize count at 0
// listen for clicks
//increment the count variable when button is clicked
// change the count-el in the HTML

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// increment function
function increment(){
    count += 1;
    countEl.innerText = count;
}

// save function

// create vaariale that contains the cound and dash seperators
// render the variable with inner text in the saveEl
//don't delete existing content

function save(){

    let countStr = count + " - "
    saveEl.textContent += countStr;
    
}