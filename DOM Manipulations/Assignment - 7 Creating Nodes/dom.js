// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild


const items = document.querySelector("#items");

items.parentElement.style.backgroundColor = "#f4f4f4";
items.lastElementChild.style.color = "red";
items.lastElementChild.textContent = "Hellooo";


const newDiv = document.createElement('div');
newDiv.className = "new-div";
items.firstElementChild.style.color = "blue";
items.nextElementSibling.style.padding = "5px";
items.previousElementSibling.style.color = 'orange';
newDiv.setAttribute("id", "new-div");
const newDivText = document.createTextNode("New Div Text");
newDiv.appendChild(newDivText);

const container = document.querySelector(".container");
container.appendChild(newDiv);

const helloWorldDiv = document.createElement("div");
const helloWorldDivText = document.createTextNode("Hello World!");
helloWorldDiv.appendChild(helloWorldDivText);
const header = document.querySelector("#header-title");
container.insertBefore(helloWorldDiv, header);