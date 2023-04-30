const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    nameInput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
