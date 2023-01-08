let iterator = 0;
let flag = true;
while (flag) {
  if (localStorage.getItem(`${iterator}`) == value) {
    localStorage.setItem(
      `${iterator}`,
      `${}-${descriptionInput.value}-${amountInput.value}`
    );
  }
}
