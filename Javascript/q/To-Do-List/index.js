// Dom manipulation

let inputBox = document.querySelector("#input-box");
let addButton = document.querySelector(".add");
let list = document.querySelector(".list-container")

// Event listener

addButton.addEventListener("click", function(){
    let result = inputBox.value;
   
// list.innerHTML += `<li>${result}</li>`
if(result === ''){
    alert("You must write something");
}else{
    let li = document.createElement("li");
    li.innerHTML = result;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}
  inputBox.value = ""  
})

// Event listener

list.addEventListener("click", function(e){
    // console.log("check")
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})