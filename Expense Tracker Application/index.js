const submitBtn = document.querySelector("input[type='submit']");
let deleteBtnG = document.querySelectorAll(".delete-btn");
let updateUserG = document.querySelectorAll(".update-btn");

// count logic
let count = localStorage.getItem("count");
if (count == null) {
  localStorage.setItem("count", "0");
}

// Add expenses
submitBtn.addEventListener("click", addExpense);
function addExpense(e) {
  e.preventDefault();
  count = parseInt(localStorage.getItem("count"));
  const category = document.querySelector("#category").value;
  const description = document.querySelector("#input-description").value;
  const amount = document.querySelector("#input-amount").value;
  localStorage.setItem(`${count}`, `${category}-${description}-${amount}`);
  count++;
  localStorage.setItem("count", `${count}`);
  updateDisplay(category, description, amount);
}

// display expenses
function display() {
  for (let i = 0; i < count; i++) {
    const expenseDetails = localStorage.getItem(`${i}`);
    if (expenseDetails != null && expenseDetails != undefined) {
      const parsedData = expenseDetails.split("-");
      const category = parsedData[0];
      const description = parsedData[1];
      const amount = parsedData[2];

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
      const text = `Category:${category}<span></span>Description:${description}<span></span>Amount:${amount}`;
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

// update the display
function updateDisplay(category, description, amount) {
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
  const text = `Category:${category}<span></span>Description:${description}<span></span>Amount:${amount}`;
  newDiv.innerHTML = text;
  btnContainer.appendChild(updateBtn);
  btnContainer.appendChild(deleteBtn);
  newDiv.appendChild(btnContainer);
  formContainerDiv.appendChild(newDiv);

  // updating the delete & update array
  deleteBtnG = document.querySelectorAll(".delete-btn");
  updateUserG = document.querySelectorAll(".update-btn");
  // delete functionality
  deleteBtnG = document.querySelectorAll(".delete-btn");

  for (let i = 0; i < deleteBtnG.length; i++) {
    deleteBtnG[i].addEventListener("click", deleteExpense);
    function deleteExpense() {
      const parentElement = deleteBtnG[i].parentElement.parentElement;
      const categoryRaw = parentElement.firstChild.textContent;
      const descriptionRaw =
        parentElement.firstChild.nextSibling.nextSibling.textContent;
      const amountRaw =
        parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
          .textContent;
      const parsedCategory = categoryRaw.split(":")[1];
      const parsedDescription = descriptionRaw.split(":")[1];
      const parsedAmount = amountRaw.split(":")[1];
      const value =
        parsedCategory + "-" + parsedDescription + "-" + parsedAmount;

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

  // update functionality
  updateUserG = document.querySelectorAll(".update-btn");
  for (let i = 0; i < updateUserG.length; i++) {
    updateUserG[i].addEventListener("click", updateExpense);
    // bigPapa = actual div containing the user details
    const bigPapa = updateUserG[i].parentElement.parentElement;

    function updateExpense() {
      const modal = document.createElement("div");
      const modalTitle = document.createElement("div");
      modalTitle.className = "modal-title";
      modalTitle.innerText = "Update User";

      // Category label & input
      const categoryLabel = document.createElement("label");
      const categorySelect = document.createElement("select");
      categoryLabel.className = "modal-label";
      categoryLabel.innerHTML = "Category:";

      // Description label & input
      const descriptionLabel = document.createElement("label");
      const descriptionInput = document.createElement("input");
      descriptionLabel.className = "modal-label";
      descriptionLabel.innerHTML = "Description:";

      // Amount label & input
      const amountLabel = document.createElement("label");
      const amountInput = document.createElement("input");
      amountLabel.className = "modal-label";
      amountLabel.innerHTML = "Amount:";

      // Submit button
      const submitBtn = document.createElement("button");
      submitBtn.className = "submit-btn";
      submitBtn.innerHTML = "Submit";

      submitBtn.addEventListener("click", closeModal);
      function closeModal() {
        const categoryRaw = bigPapa.firstChild.textContent;
        const descriptionRaw =
          bigPapa.firstChild.nextSibling.nextSibling.textContent;
        const amountRaw =
          bigPapa.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
            .textContent;
        const parsedCategory = categoryRaw.split(":")[1];
        const parsedDescription = descriptionRaw.split(":")[1];
        const parsedAmount = amountRaw.split(":")[1];
        const value =
          parsedCategory + "-" + parsedDescription + "-" + parsedAmount;

        // Local Storage Logic
        let iterator = 0;
        let flag = true;
        while (flag) {
          if (localStorage.getItem(`${iterator}`) == value) {
            localStorage.setItem(
              `${iterator}`,
              `${categorySelect.value}-${descriptionInput.value}-${amountInput.value}`
            );
          }
        }
        bigPapa.remove();
        modal.remove();
        updateDisplay(
          categorySelect.value,
          descriptionInput.value,
          amountInput.value
        );
        descriptionInput.value = "";
        amountInput.value = "";
      }

      // Lexicographical addition of elements
      modal.appendChild(modalTitle);
      modal.appendChild(categoryLabel);
      modal.appendChild(categorySelect);
      modal.appendChild(descriptionLabel);
      modal.appendChild(descriptionInput);
      modal.appendChild(amountLabel);
      modal.appendChild(amountInput);
      modal.appendChild(submitBtn);
      modal.className = "modal";
      const body = document.querySelector("body");
      body.appendChild(modal);
    }
  }
}

// delete functionality
deleteBtnG = document.querySelectorAll(".delete-btn");

for (let i = 0; i < deleteBtnG.length; i++) {
  deleteBtnG[i].addEventListener("click", deleteExpense);
  function deleteExpense() {
    const parentElement = deleteBtnG[i].parentElement.parentElement;
    const categoryRaw = parentElement.firstChild.textContent;
    const descriptionRaw =
      parentElement.firstChild.nextSibling.nextSibling.textContent;
    const amountRaw =
      parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
        .textContent;
    const parsedCategory = categoryRaw.split(":")[1];
    const parsedDescription = descriptionRaw.split(":")[1];
    const parsedAmount = amountRaw.split(":")[1];
    const value = parsedCategory + "-" + parsedDescription + "-" + parsedAmount;

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

// update functionality
updateUserG = document.querySelectorAll(".update-btn");
for (let i = 0; i < updateUserG.length; i++) {
  updateUserG[i].addEventListener("click", updateExpense);
  // bigPapa = actual div containing the user details
  const bigPapa = updateUserG[i].parentElement.parentElement;

  function updateExpense() {
    const modal = document.createElement("div");
    const modalTitle = document.createElement("div");
    modalTitle.className = "modal-title";
    modalTitle.innerText = "Update User";

    // Category label & input
    const categoryLabel = document.createElement("label");
    const categorySelect = document.createElement("select");
    categoryLabel.className = "modal-label";
    categoryLabel.innerHTML = "Category:";

    // Description label & input
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.className = "modal-label";
    descriptionLabel.innerHTML = "Description:";

    // Amount label & input
    const amountLabel = document.createElement("label");
    const amountInput = document.createElement("input");
    amountLabel.className = "modal-label";
    amountLabel.innerHTML = "Amount:";

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.className = "submit-btn";
    submitBtn.innerHTML = "Submit";

    submitBtn.addEventListener("click", closeModal);
    function closeModal() {
      const categoryRaw = bigPapa.firstChild.textContent;
      const descriptionRaw =
        bigPapa.firstChild.nextSibling.nextSibling.textContent;
      const amountRaw =
        bigPapa.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
          .textContent;
      const parsedCategory = categoryRaw.split(":")[1];
      const parsedDescription = descriptionRaw.split(":")[1];
      const parsedAmount = amountRaw.split(":")[1];
      const value =
        parsedCategory + "-" + parsedDescription + "-" + parsedAmount;

      // Local Storage Logic
      let iterator = 0;
      let flag = true;
      while (flag) {
        if (localStorage.getItem(`${iterator}`) == value) {
          localStorage.setItem(
            `${iterator}`,
            `${categorySelect.value}-${descriptionInput.value}-${amountInput.value}`
          );
        }
      }
      bigPapa.remove();
      modal.remove();
      updateDisplay(
        categorySelect.value,
        descriptionInput.value,
        amountInput.value
      );
      descriptionInput.value = "";
      amountInput.value = "";
    }

    // Lexicographical addition of elements
    modal.appendChild(modalTitle);
    modal.appendChild(categoryLabel);
    modal.appendChild(categorySelect);
    modal.appendChild(descriptionLabel);
    modal.appendChild(descriptionInput);
    modal.appendChild(amountLabel);
    modal.appendChild(amountInput);
    modal.appendChild(submitBtn);
    modal.className = "modal";
    const body = document.querySelector("body");
    body.appendChild(modal);
  }
}
