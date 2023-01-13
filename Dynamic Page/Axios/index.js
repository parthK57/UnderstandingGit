const submitBtn = document.getElementById("submit");
const mainBodyDiv = document.querySelector("#papa-div");

// Posting data to CRUDCRUD and displaying results on the website
submitBtn.addEventListener("click", submit);
function submit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value.toString();

  axios({
    method: "post",
    url: "https://crudcrud.com/api/53a5190081bf4d869f71d15bfeda4334/appointmentData",
    data: {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    },
  })
    .then((res) => {
      display(res);
    })
    .catch((err) => console.log(err));
}

function display(res) {
  const data = res.data;
  const name = data.name;
  const email = data.email;
  const phoneNumber = data.phoneNumber;
  const id = data._id;

  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const detailsContainer = document.createElement("div");
  const nameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const phoneNumberSpan = document.createElement("span");
  const buttonsContainer = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  card.className = "card card-style bg-secondary-subtle";
  cardBody.className = "card-body d-flex";
  detailsContainer.className = "container d-flex flex-column";
  nameSpan.innerHTML = `${name}`;
  emailSpan.innerHTML = `${email}`;
  phoneNumberSpan.innerHTML = `${phoneNumber}`;
  buttonsContainer.className =
    "container d-flex justify-content-end align-items-center";
  editButton.className = "btn btn-warning btn-dimensions";
  editButton.innerText = "Edit";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#editModal");
  deleteButton.className = "btn btn-danger btn-dimensions";
  deleteButton.innerText = "Delete";

  // Lexicographical addition of elements
  mainBodyDiv.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(detailsContainer);
  cardBody.appendChild(buttonsContainer);
  detailsContainer.appendChild(nameSpan);
  detailsContainer.appendChild(emailSpan);
  detailsContainer.appendChild(phoneNumberSpan);
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  // setting up functionality for update
  editButton.addEventListener("click", edit);
  // editing stuff
  function edit() {
    // all the modal elements
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h4");
    const close = document.createElement("button");
    const modalBody = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const phoneNumberLabel = document.createElement("label");
    const phoneNumberInput = document.createElement("input");
    const modalFooter = document.createElement("div");
    const closeButton = document.createElement("button");
    const saveButton = document.createElement("button");

    mainBodyDiv.appendChild(modal);

    modal.className = "modal fade";
    modal.setAttribute("id", "editModal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "modal-title");
    modal.setAttribute("aria-hidden", "true");
    modal.appendChild(modalDialog);
    modalDialog.className = "modal-dialog";
    modalDialog.appendChild(modalContent);
    modalContent.className = "modal-content";

    modalContent.appendChild(modalHeader);
    modalHeader.className = "modal-header";
    modalHeader.appendChild(modalTitle);
    modalTitle.innerText = "Edit Details";
    modalTitle.setAttribute("id", "modal-title");
    modalHeader.appendChild(close);
    close.className = "btn-close";
    close.setAttribute("type", "button");
    close.setAttribute("data-bs-dismiss", "modal");
    close.setAttribute("aria-label", "Close");

    modalContent.appendChild(modalBody);
    modalBody.className = "modal-body";
    modalBody.appendChild(nameLabel);
    nameLabel.className = "form-label";
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name:";
    modalBody.appendChild(nameInput);
    nameInput.className = "form-control";
    nameInput.setAttribute("id", "modalName");
    modalBody.appendChild(emailLabel);
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email:";
    modalBody.appendChild(emailInput);
    emailInput.className = "form-control";
    emailInput.setAttribute("id", "modalEmail");
    modalBody.appendChild(phoneNumberLabel);
    phoneNumberLabel.className = "form-label";
    phoneNumberLabel.setAttribute("for", "phoneNumber");
    phoneNumberLabel.innerHTML = "Phone Number:";
    modalBody.appendChild(phoneNumberInput);
    phoneNumberInput.className = "form-control";
    phoneNumberInput.setAttribute("id", "modalPhoneNumber");

    modalContent.appendChild(modalFooter);
    modalFooter.className = "modal-footer";
    modalFooter.appendChild(closeButton);
    closeButton.className = "btn btn-secondary";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("type", "button");
    closeButton.innerText = "Close";
    modalFooter.appendChild(saveButton);
    saveButton.className = "btn btn-primary";
    saveButton.innerText = "Save";
    saveButton.setAttribute("type", "button");
    saveButton.addEventListener("click", put);

    // patch
    function put() {
      const name = document.getElementById("modalName").value;
      const email = document.getElementById("modalEmail").value;
      const phoneNumber = document.getElementById("modalPhoneNumber").value;

      axios({
        method: "put",
        url: `https://crudcrud.com/api/be580ea7389d4d348eadeadc9628356c/appointmentData/${id}`,
        data: {
          name: `${name}`,
          email: `${email}`,
          phoneNumber: `${phoneNumber}`,
        },
      })
        .then(() => {
          updateDisplay(name, email, phoneNumber, id);
          card.remove();
        })
        .catch((err) => console.log(err));
    }
  }

  // setting up functionality for delete
  deleteButton.addEventListener("click", deleteF);
  function deleteF() {
    axios({
      method: "delete",
      url: `https://crudcrud.com/api/be580ea7389d4d348eadeadc9628356c/appointmentData/${id}`,
    }).then(() => {
      card.remove();
    });
  }
}

// Update the display
function updateDisplay(name, email, phoneNumber, id) {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const detailsContainer = document.createElement("div");
  const nameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const phoneNumberSpan = document.createElement("span");
  const buttonsContainer = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  card.className = "card card-style bg-secondary-subtle";
  cardBody.className = "card-body d-flex";
  detailsContainer.className = "container d-flex flex-column";
  nameSpan.innerHTML = `${name}`;
  emailSpan.innerHTML = `${email}`;
  phoneNumberSpan.innerHTML = `${phoneNumber}`;
  buttonsContainer.className =
    "container d-flex justify-content-end align-items-center";
  editButton.className = "btn btn-warning btn-dimensions";
  editButton.innerText = "Edit";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#editModal");
  deleteButton.className = "btn btn-danger btn-dimensions";
  deleteButton.innerText = "Delete";

  // Lexicographical addition of elements
  mainBodyDiv.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(detailsContainer);
  cardBody.appendChild(buttonsContainer);
  detailsContainer.appendChild(nameSpan);
  detailsContainer.appendChild(emailSpan);
  detailsContainer.appendChild(phoneNumberSpan);
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  // setting up functionality for update and delete
  editButton.addEventListener("click", edit);
  // editing stuff
  function edit() {
    // all the modal elements
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h4");
    const close = document.createElement("button");
    const modalBody = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const phoneNumberLabel = document.createElement("label");
    const phoneNumberInput = document.createElement("input");
    const modalFooter = document.createElement("div");
    const closeButton = document.createElement("button");
    const saveButton = document.createElement("button");

    mainBodyDiv.appendChild(modal);

    modal.className = "modal fade";
    modal.setAttribute("id", "editModal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "modal-title");
    modal.setAttribute("aria-hidden", "true");
    modal.appendChild(modalDialog);
    modalDialog.className = "modal-dialog";
    modalDialog.appendChild(modalContent);
    modalContent.className = "modal-content";

    modalContent.appendChild(modalHeader);
    modalHeader.className = "modal-header";
    modalHeader.appendChild(modalTitle);
    modalTitle.innerText = "Edit Details";
    modalTitle.setAttribute("id", "modal-title");
    modalHeader.appendChild(close);
    close.className = "btn-close";
    close.setAttribute("type", "button");
    close.setAttribute("data-bs-dismiss", "modal");
    close.setAttribute("aria-label", "Close");

    modalContent.appendChild(modalBody);
    modalBody.className = "modal-body";
    modalBody.appendChild(nameLabel);
    nameLabel.className = "form-label";
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name:";
    modalBody.appendChild(nameInput);
    nameInput.className = "form-control";
    nameInput.setAttribute("id", "modalName");
    modalBody.appendChild(emailLabel);
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email:";
    modalBody.appendChild(emailInput);
    emailInput.className = "form-control";
    emailInput.setAttribute("id", "modalEmail");
    modalBody.appendChild(phoneNumberLabel);
    phoneNumberLabel.className = "form-label";
    phoneNumberLabel.setAttribute("for", "phoneNumber");
    phoneNumberLabel.innerHTML = "Phone Number:";
    modalBody.appendChild(phoneNumberInput);
    phoneNumberInput.className = "form-control";
    phoneNumberInput.setAttribute("id", "modalPhoneNumber");

    modalContent.appendChild(modalFooter);
    modalFooter.className = "modal-footer";
    modalFooter.appendChild(closeButton);
    closeButton.className = "btn btn-secondary";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("type", "button");
    closeButton.innerText = "Close";
    modalFooter.appendChild(saveButton);
    saveButton.className = "btn btn-primary";
    saveButton.innerText = "Save";
    saveButton.setAttribute("type", "button");
    saveButton.addEventListener("click", put);

    // patch
    function put() {
      const name = document.getElementById("modalName").value;
      const email = document.getElementById("modalEmail").value;
      const phoneNumber = document.getElementById("modalPhoneNumber").value;

      axios({
        method: "put",
        url: `https://crudcrud.com/api/be580ea7389d4d348eadeadc9628356c/appointmentData/${id}`,
        data: {
          name: `${name}`,
          email: `${email}`,
          phoneNumber: `${phoneNumber}`,
        },
      })
        .then(() => {
          card.remove();
          updateDisplay(name, email, phoneNumber, id);
        })
        .catch((err) => console.log(err));
    }
  }

  // deleting stuff
  deleteButton.addEventListener("click", deleteF);
  function deleteF() {
    axios({
      method: "delete",
      url: `https://crudcrud.com/api/be580ea7389d4d348eadeadc9628356c/appointmentData/${id}`,
    }).then(() => {
      card.remove();
    });
  }
}

// // getting preloaded data
function run() {
  console.log("first");
  axios({
    method: "get",
    url: "https://crudcrud.com/api/be580ea7389d4d348eadeadc9628356c/appointmentData",
  })
    .then((res) => {
      //   console.log(res.data);
      preLoadData(res);
    })
    .catch((err) => console.log(err));
}
// run();

function preLoadData(res) {
  const rawData = res.data;
  for (let i = 0; i < rawData.length; i++) {
    updateDisplay(
      rawData[i].name,
      rawData[i].email,
      rawData[i].phoneNumber,
      rawData[i]._id
    );
  }
}
