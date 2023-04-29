let counterValue = 0;
const spanValueRef = document.querySelector("#value");

const buttonDecrementRefs = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRefs = document.querySelector(
  'button[data-action="increment"]'
);

buttonDecrementRefs.addEventListener("click", () => {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
});

buttonIncrementRefs.addEventListener("click", () => {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
});

