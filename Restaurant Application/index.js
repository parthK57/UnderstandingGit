const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", addItem);
function addItem(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const table = document.getElementById("tableNumber").value;

  axios({
    method: "post",
    url: `https://crudcrud.com/api/53a5190081bf4d869f71d15bfeda4334/${table}`,
    data: {
      name: `${name}`,
      price: `${price}`,
      table: `${table}`,
    },
  })
    .then((res) => display(res))
    .catch((err) => console.log(err));
}

function display(res) {
  const data = res.data;
  const name = data.name;
  const price = data.price;
  const table = data.table;
  const id = data._id;

  if (table == "Table1") {
    const table1Container = document.getElementById("orders-1");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table1Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      axios({
        method: "delete",
        url: `https://crudcrud.com/api/53a5190081bf4d869f71d15bfeda4334/${table}/${id}`,
      })
        .then(() => table1Container.removeChild(card))
        .catch((err) => console.log(err));
    }
  } else if (table == "Table2") {
    const table2Container = document.getElementById("orders-2");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table2Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      axios({
        method: "delete",
        url: `https://crudcrud.com/api/53a5190081bf4d869f71d15bfeda4334/${table}/${id}`,
      })
        .then(() => table2Container.removeChild(card))
        .catch((err) => console.log(err));
    }
  } else {
    const table3Container = document.getElementById("orders-3");

    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInfoContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");

    card.className = "card card-style inherit-container";
    cardBody.className = "card-body d-flex";
    cardInfoContainer.className = "container d-flex flex-column";
    nameSpan.innerText = `Name: ${name}`;
    priceSpan.innerText = `Price: ${price}`;
    buttonContainer.className =
      "container d-flex justify-content-end align-items-center";
    deleteBtn.className = "btn btn-danger btn-dimensions";
    deleteBtn.innerText = "Delete";

    // Lexicographical addition
    table3Container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardInfoContainer);
    cardInfoContainer.appendChild(nameSpan);
    cardInfoContainer.appendChild(priceSpan);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteF);
    function deleteF() {
      axios({
        method: "delete",
        url: `https://crudcrud.com/api/53a5190081bf4d869f71d15bfeda4334/${table}/${id}`,
      })
        .then(() => table3Container.removeChild(card))
        .catch((err) => console.log(err));
    }
  }
}
