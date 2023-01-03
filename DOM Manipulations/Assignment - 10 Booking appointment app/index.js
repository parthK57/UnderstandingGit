const name = document.querySelector("#input-name");
const email = document.querySelector("#input-email");
const submitBtn = document.querySelector("input[type='submit']");
let deleteBtnG = document.querySelectorAll(".delete-btn");

// count logic
let count = localStorage.getItem("count");
if (count == null) {
  localStorage.setItem("count", "0");
}

submitBtn.addEventListener("click", addUser);

function addUser(e) {
  e.preventDefault();
  count = parseInt(localStorage.getItem("count"));
  localStorage.setItem(`${count}`, `${name.value}-${email.value}`);
  count++;
  localStorage.setItem("count", `${count}`);
  updateDisplay(name, email);
  name.value = "";
  email.value = "";
}

function display() {
  for (let i = 0; i < count; i++) {
    const userDetails = localStorage.getItem(`${i}`);
    if (userDetails != null && userDetails != undefined) {
      const parsedData = userDetails.split("-");
      const userName = parsedData[0];
      const userEmail = parsedData[1];

      // document creation
      const formContainerDiv = document.querySelector(".form-container");
      const newDiv = document.createElement("div");
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      newDiv.className = "display-users";
      deleteBtn.innerHTML = `Delete`;
      const text = `Name:${userName} <span></span> Email:${userEmail}`;
      newDiv.innerHTML = text;
      newDiv.appendChild(deleteBtn);
      formContainerDiv.appendChild(newDiv);
      deleteBtnG = document.querySelectorAll(".delete-btn");
    }
  }
}
display();

function updateDisplay(name, email) {
  // document creation
  const formContainerDiv = document.querySelector(".form-container");
  const newDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = `Delete`;
  const text = `Name:${name.value} <span></span> Email:${email.value}`;
  newDiv.innerHTML = text;
  newDiv.className = "display-users";
  newDiv.appendChild(deleteBtn);
  formContainerDiv.appendChild(newDiv);
  deleteBtnG = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < deleteBtnG.length; i++) {
    deleteBtnG[i].addEventListener("click", deleteUser);
    function deleteUser() {
      const parentElement = deleteBtnG[i].parentElement;
      parentElement.remove();
      localStorage.removeItem(`${i}`);
    }
  }
}

// deleting an user
deleteBtnG = document.querySelectorAll(".delete-btn");

for (let i = 0; i < deleteBtnG.length; i++) {
  deleteBtnG[i].addEventListener("click", deleteUser);
  function deleteUser() {
    const parentElement = deleteBtnG[i].parentElement;
    parentElement.remove();
    localStorage.removeItem(`${i}`);
  }
}
