const input = document.getElementById("validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", (event) => {
  const valueLengt = event.target.value.length;

  if (valueLengt === Number(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
