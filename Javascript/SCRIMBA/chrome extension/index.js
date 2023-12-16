const inputBtn = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    // console.log("Button Clicked2")
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
    // console.log(myLeads);
})

function renderLeads(){
    let listItems = "";

for(let i = 0; i < myLeads.length; i++){
    // listItems += "<li><a target ='blank' href=''myLeads[i]''>" + myLeads[i] + '</a></li>'
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append()

    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
        </li>
    
    `
}

ulEl.innerHTML = listItems

}

// function saveLead(){
//     console.log("Button Clicked")
// }