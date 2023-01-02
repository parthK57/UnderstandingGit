const btn = document.querySelector(".btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const ul = document.querySelector("#users");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  btn.style.background = "green";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  btn.style.background = "#333";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((name.value == "") & (email.value == "")) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter a name & email!";
    setTimeout(() => {
      msg.remove();
    }, 1500);
  } else if (name.value == "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter a name!";
    setTimeout(() => {
      msg.remove();
    }, 1500);
  } else if (email.value == "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter an email!";
    setTimeout(() => {
      msg.remove();
    }, 1500);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`Name: ${name.value}   Email: ${email.value}`)
    );
    ul.appendChild(li);
    name.value = "";
    email.value = "";
  }
});
