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

// adding new user
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

// display previous data
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
      const text = `Name:${userName}<span></span>Email:${userEmail}`;
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

// update display
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
  const text = `Name:${name.value}<span></span>Email:${email.value}`;
  newDiv.innerHTML = text;
  newDiv.className = "display-users";
  btnContainer.appendChild(updateBtn);
  btnContainer.appendChild(deleteBtn);
  newDiv.appendChild(btnContainer);
  formContainerDiv.appendChild(newDiv);
  deleteBtnG = document.querySelectorAll(".delete-btn");
  updateUserG = document.querySelectorAll(".update-btn");

  // delete button logic
  for (let i = 0; i < deleteBtnG.length; i++) {
    deleteBtnG[i].addEventListener("click", deleteUser);
    function deleteUser() {
      const parentElement = deleteBtnG[i].parentElement.parentElement;
      const rawUserName = parentElement.firstChild.textContent;
      const rawUserEmail =
        parentElement.firstChild.nextSibling.nextSibling.textContent;
      const parsedUserName = rawUserName.split(":")[1];
      const parsedUserEmail = rawUserEmail.split(":")[1];
      const value = parsedUserName + "-" + parsedUserEmail;

      // Algorithm
      let flag = true;
      let iterator = 0;
      while (flag) {
        const iteratorValue = localStorage.getItem(`${iterator}`);
        if (iteratorValue == value) {
          parentElement.remove();
          localStorage.removeItem(`${iterator}`);
          flag = false;
        }
        iterator++;
      }
    }
  }

  // update button logic
  for (let i = 0; i < updateUserG.length; i++) {
    updateUserG[i].addEventListener("click", updateUser);
    // bigPapa = actual div containing the user details
    const bigPapa = updateUserG[i].parentElement.parentElement;
    // const olderUserName = updateUserG[i].parentElement.parentElement.
    function updateUser() {
      const modal = document.createElement("div");
      const modalTitle = document.createElement("div");
      modalTitle.className = "modal-title";
      modalTitle.innerText = "Update User";
  
      // Name label & input
      const nameLabel = document.createElement("label");
      const nameInput = document.createElement("input");
      nameLabel.className = "modal-label";
      nameLabel.innerHTML = "Name:";
  
      // Email label
      const emailLabel = document.createElement("label");
      const emailInput = document.createElement("input");
      emailLabel.className = "modal-label";
      emailLabel.innerHTML = "Email:";
  
      // Submit button
      const submitBtn = document.createElement("button");
      submitBtn.className = "submit-btn";
      submitBtn.innerHTML = "Submit";
      submitBtn.addEventListener("click", closeModal);
      function closeModal() {
        const rawUserName = bigPapa.firstChild.textContent;
        const rawUserEmail = bigPapa.firstChild.nextSibling.nextSibling.textContent;
        const userName = rawUserName.split(":")[1];
        const userEmail = rawUserEmail.split(":")[1];
        const value = userName+"-"+userEmail;
  
        // Local Storage Logic
        let iterator = 0;
        let flag = true;
        while(flag){
          if(localStorage.getItem(`${iterator}`) == value){
            localStorage.setItem(`${iterator}`, `${nameInput.value}-${emailInput.value}`);
            flag = false;
          }
          iterator++;
        }
        bigPapa.remove();
        modal.remove();
        updateDisplay(nameInput, emailInput);
        emailInput.value = "";
        nameInput.value = "";
      }
  
      // Lexicographical addition of elements
      modal.appendChild(modalTitle);
      modal.appendChild(nameLabel);
      modal.appendChild(nameInput);
      modal.appendChild(emailLabel);
      modal.appendChild(emailInput);
      modal.appendChild(submitBtn);
      modal.className = "modal";
      const body = document.querySelector("body");
      body.appendChild(modal);
    }
  }  
}

// deleting an user
deleteBtnG = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteBtnG.length; i++) {
  deleteBtnG[i].addEventListener("click", deleteUser);
  function deleteUser() {
    const parentElement = deleteBtnG[i].parentElement.parentElement;
    const rawUserName = parentElement.firstChild.textContent;
    const rawUserEmail =
      parentElement.firstChild.nextSibling.nextSibling.textContent;
    const parsedUserName = rawUserName.split(":")[1];
    const parsedUserEmail = rawUserEmail.split(":")[1];
    const value = parsedUserName + "-" + parsedUserEmail;

    // Algorithm
    let flag = true;
    let iterator = 0;
    while (flag) {
      const iteratorValue = localStorage.getItem(`${iterator}`);
      if (iteratorValue == value) {
        parentElement.remove();
        localStorage.removeItem(`${iterator}`);
        flag = false;
      }
      iterator++;
    }
  }
}

// update an user
updateUserG = document.querySelectorAll(".update-btn");
for (let i = 0; i < updateUserG.length; i++) {
  updateUserG[i].addEventListener("click", updateUser);
  // bigPapa = actual div containing the user details
  const bigPapa = updateUserG[i].parentElement.parentElement;
  // const olderUserName = updateUserG[i].parentElement.parentElement.
  function updateUser() {
    const modal = document.createElement("div");
    const modalTitle = document.createElement("div");
    modalTitle.className = "modal-title";
    modalTitle.innerText = "Update User";

    // Name label & input
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    nameLabel.className = "modal-label";
    nameLabel.innerHTML = "Name:";

    // Email label
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    emailLabel.className = "modal-label";
    emailLabel.innerHTML = "Email:";

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.className = "submit-btn";
    submitBtn.innerHTML = "Submit";
    submitBtn.addEventListener("click", closeModal);
    function closeModal() {
      const rawUserName = bigPapa.firstChild.textContent;
      const rawUserEmail = bigPapa.firstChild.nextSibling.nextSibling.textContent;
      const userName = rawUserName.split(":")[1];
      const userEmail = rawUserEmail.split(":")[1];
      const value = userName+"-"+userEmail;

      // Local Storage Logic
      let iterator = 0;
      let flag = true;
      while(flag){
        if(localStorage.getItem(`${iterator}`) == value){
          localStorage.setItem(`${iterator}`, `${nameInput.value}-${emailInput.value}`);
          flag = false;
        }
        iterator++;
      }
      bigPapa.remove();
      modal.remove();
      updateDisplay(nameInput, emailInput);
      emailInput.value = "";
      nameInput.value = "";
    }

    // Lexicographical addition of elements
    modal.appendChild(modalTitle);
    modal.appendChild(nameLabel);
    modal.appendChild(nameInput);
    modal.appendChild(emailLabel);
    modal.appendChild(emailInput);
    modal.appendChild(submitBtn);
    modal.className = "modal";
    const body = document.querySelector("body");
    body.appendChild(modal);
  }
}
