const form = document.getElementById("addForm");
let itemList = document.querySelector("#items");
let deleteBtnG = document.querySelectorAll(
  "button[class='btn btn-danger btn-sm float-right delete']"
);
console.log("Item List-");
console.log(itemList);
console.log("Delete Button List");
console.log(deleteBtnG);

// submit event
const addItem = (e) => {
  e.preventDefault();
  const inputVal = document.getElementById("item").value;
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "list-group-item");
  newLi.appendChild(document.createTextNode(inputVal));
  // itemList.appendChild(newLi);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  newLi.appendChild(deleteBtn);
  itemList.appendChild(newLi);
  itemList = document.querySelector("#items");
  deleteBtnG = document.querySelectorAll(
    "button[class='btn btn-danger btn-sm float-right delete']"
  );
  console.log("Item List-");
  console.log(itemList);
  console.log("Delete Button List");
  console.log(deleteBtnG);
};

// delete event
const removeItem = (e) => {
  e.preventDefault();
  const parentElement = e.target.parentElement;
  itemList.removeChild(parentElement);
};

for (let i = 0; i < deleteBtnG.length; i++) {
  deleteBtnG[i].addEventListener("click", removeItem);
}

form.addEventListener("submit", addItem);
