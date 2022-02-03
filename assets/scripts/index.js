const textBox = document.getElementById("textbox");
const countBtn = document.getElementById("btn");
const showCount = document.getElementById("counter");

let count = 0;
countBtn.addEventListener("click", () => {
  if (textBox.value.length !== 0) {
    count = textBox.value.split(" ").length;
    showCount.innerText = `Você digitou ${count} palavras.`;
  }
});
