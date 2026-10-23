const text = document.getElementById("text");
document.getElementById("change-text-btn").addEventListener("click", function () {
  text.textContent = "The text was changed by JavaScript!";
});

const demoDiv = document.getElementById("demo-div");
const colors = ["#FAF6EF", "#E3D5C3", "#B08968", "#C9D6CC", "#F3D9D9"];
let colorIndex = 0;
let fontSize = 16;

document.getElementById("color-btn").addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  demoDiv.style.backgroundColor = colors[colorIndex];
});

document.getElementById("font-btn").addEventListener("click", function () {
  fontSize += 4;
  if (fontSize > 36) fontSize = 16;
  demoDiv.style.fontSize = fontSize + "px";
});

const list = document.getElementById("item-list");
let count = list.children.length;

document.getElementById("add-btn").addEventListener("click", function () {
  count++;
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
});

document.getElementById("remove-btn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    count--;
  }
});
