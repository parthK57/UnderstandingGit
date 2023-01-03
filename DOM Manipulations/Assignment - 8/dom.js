const form = document.getElementById("addForm");
const itemList = document.querySelector("#items");
var filter = document.getElementById("filter");

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

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-warning btn-sm float-right warning";
  editBtn.appendChild(document.createTextNode("X"));
  newLi.appendChild(editBtn);
  itemList.appendChild(newLi);
};

form.addEventListener("submit", addItem);

// delete event
const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

itemList.addEventListener("click", removeItem);

// filter event

filter.addEventListener("keyup", filterItems);

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    const abc = Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }