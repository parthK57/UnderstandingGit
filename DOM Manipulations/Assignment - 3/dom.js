const title = document.querySelector("#main-header");
const addItem = document.querySelector(".title");

title.style.borderBottom = "3px solid black";
const li2 = document.querySelector(".list-group-item:nth-child(2)");
const li3 = document.querySelector(".list-group-item:nth-child(3)");

li2.style.background = "green";
//li3.style.display = "none";

const qli = document.querySelectorAll(".list-group-item");
qli[1].style.color = "yellow";

for(let i = 0; i < qli.length; i++){
    if(i%2 != 0) qli[i].style.background = "green";
}