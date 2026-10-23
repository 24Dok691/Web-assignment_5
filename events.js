const box = document.getElementById("hover-box");
const originalColor = "#E3D5C3";

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "#B08968";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = originalColor;
});

const keyInput = document.getElementById("key-input");
const keyOutput = document.getElementById("key-output");

keyInput.addEventListener("keyup", function () {
  keyOutput.textContent = keyInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("calc-result");
const opButtons = document.querySelectorAll("[data-op]");

function calculate(op) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Enter both numbers";
    return;
  }

  let res;
  if (op === "+") res = a + b;
  else if (op === "-") res = a - b;
  else if (op === "*") res = a * b;
  else if (op === "/") {
    if (b === 0) {
      result.textContent = "Cannot divide by zero";
      return;
    }
    res = a / b;
  }
  result.textContent = res;
}

opButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculate(btn.dataset.op);
  });
});
