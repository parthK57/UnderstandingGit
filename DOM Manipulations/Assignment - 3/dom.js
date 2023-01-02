const title = document.querySelector("#main-header");
const addItem = document.querySelector(".title");

title.style.borderBottom = "3px solid black";
const li = document.getElementsByClassName("list-group-item");
li[2].style.background = "green";

for(let i = 0; i < li.length; i++) li[i].style.fontWeight = "bold";