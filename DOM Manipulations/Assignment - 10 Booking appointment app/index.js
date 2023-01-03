const name = document.querySelector("#input-name");
const email = document.querySelector("#input-email");
const submitBtn = document.querySelector("input[type='submit']");

// count logic
let count = localStorage.getItem("count");
if(count == null){
    localStorage.setItem("count", "0");
}

submitBtn.addEventListener("click", addUser);

function addUser(e) {
  e.preventDefault();
//   const formContainerDiv = document.querySelector(".form-container");
//   const newDiv = document.createElement("div");
//   newDiv.className = "display-users";
//   const text = `Name:${name.value}<span></span>Email:-${email.value}`;
//   newDiv.innerHTML = text;
//   formContainerDiv.appendChild(newDiv);
  count = parseInt(localStorage.getItem("count"));
  localStorage.setItem(`${count}`, `${name.value}-${email.value}`);
  count++;
  localStorage.setItem("count", `${count}`);
  updateDisplay(name, email);  
}

function display(){
    for(let i = 0; i < count; i++){
        const userDetails = localStorage.getItem(`${i}`);
        const parsedData = userDetails.split("-");
        const userName = parsedData[0];
        const userEmail = parsedData[1];

        // document creation
        const formContainerDiv = document.querySelector(".form-container");
        const newDiv = document.createElement("div");
        newDiv.className = "display-users";
        const text = `Name:${userName} <span></span> Email:${userEmail}`;
        newDiv.innerHTML = text;
        formContainerDiv.appendChild(newDiv);
    }
}
display();

function updateDisplay(name, email){
    // document creation
    const formContainerDiv = document.querySelector(".form-container");
    const newDiv = document.createElement("div");
    const text = `Name:${name.value} <span></span> Email:${email.value}`;
    newDiv.innerHTML = text;
    newDiv.className = "display-users";
    formContainerDiv.appendChild(newDiv);
}