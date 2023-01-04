const name = document.querySelector("#input-name");
const email = document.querySelector("#input-email");
const submitBtn = document.querySelector("input[type='submit']");
let deleteBtnG = document.querySelectorAll(".delete-btn");
let updateUserG = document.querySelectorAll(".update-btn");

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
      const btnContainer = document.createElement("div");
      btnContainer.className = "button-container";
      const deleteBtn = document.createElement("button");
      const updateBtn = document.createElement("button");
      updateBtn.className = "update-btn";
      updateBtn.innerHTML = "Update";
      deleteBtn.className = "delete-btn";
      newDiv.className = "display-users";
      deleteBtn.innerHTML = `Delete`;
      const text = `Name:${userName} <span></span> Email:${userEmail}`;
      newDiv.innerHTML = text;
      btnContainer.appendChild(updateBtn);
      btnContainer.appendChild(deleteBtn);
      newDiv.appendChild(btnContainer);
      formContainerDiv.appendChild(newDiv);
      deleteBtnG = document.querySelectorAll(".delete-btn");
      updateUserG = document.querySelectorAll(".update-btn");
    }
  }
}
display();

function updateDisplay(name, email) {
  // document creation
  const formContainerDiv = document.querySelector(".form-container");
  const newDiv = document.createElement("div");
  const btnContainer = document.createElement("div");
  btnContainer.className = "button-container";
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = `Delete`;
  const updateBtn = document.createElement("button");
  updateBtn.className = "update-btn";
  updateBtn.innerHTML = "Update";
  const text = `Name:${name.value} <span></span> Email:${email.value}`;
  newDiv.innerHTML = text;
  newDiv.className = "display-users";
  btnContainer.appendChild(updateBtn);
  btnContainer.appendChild(deleteBtn);
  newDiv.appendChild(btnContainer);
  formContainerDiv.appendChild(newDiv);
  deleteBtnG = document.querySelectorAll(".delete-btn");
  updateUserG = document.querySelectorAll(".update-btn");
  for (let i = 0; i < deleteBtnG.length; i++) {
    deleteBtnG[i].addEventListener("click", deleteUser);
    function deleteUser() {
      const parentElement = deleteBtnG[i].parentElement.parentElement;
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
    const parentElement = deleteBtnG[i].parentElement.parentElement;
    parentElement.remove();
    localStorage.removeItem(`${i}`);
  }
}

// update an user
updateUserG = document.querySelectorAll(".update-btn");

// for (let i = 0; i < updateUserG.length; i++) {
//   updateUserG[i].addEventListener("click", updateUser);
//   const bigPapa = updateUserG[i].parentElement.parentElement;
//   // const olderUserName = updateUserG[i].parentElement.parentElement.
//   function updateUser() {
//     const modal = document.createElement("div");

//     // Name label & input
//     const nameLabel = document.createElement("label");
//     const nameInput = document.createElement("input");
//     nameLabel.className = "modal-label";
//     nameLabel.innerHTML = "Name:";

//     // Email label
//     const emailLabel = document.createElement("label");
//     const emailInput = document.createElement("input");
//     emailLabel.className = "modal-label";
//     emailLabel.innerHTML = "Email:";

//     // Submit button
//     const submitBtn = document.createElement("button");
//     submitBtn.className = "submit-btn";
//     submitBtn.innerHTML = "Submit";
//     submitBtn.addEventListener("click", closeModal);
//     function closeModal() {
//       // Local Storage Logic
//       localStorage.setItem(`${i}`, `${nameInput.value}-${emailInput.value}`);
//       bigPapa.remove();
//       modal.remove();
//     }

//     // Lexicographical addition of elements
//     modal.appendChild(nameLabel);
//     modal.appendChild(nameInput);
//     modal.appendChild(emailLabel);
//     modal.appendChild(emailInput);
//     modal.appendChild(submitBtn);
//     modal.className = "modal";
//     const body = document.querySelector("body");
//     body.appendChild(modal);
//   }
// }
