const buttonClick = document.getElementById("btn");

let counter = 0;

textOutput = document.getElementById("text");
textOutput.innerText = `Você digitou ${counter} palavras`;

buttonClick.addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  if (text.length >= 1 && counter === 0) {
    counter = 1;
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      counter++;
    }
  }

  textOutput.innerText = `Você digitou ${counter} palavras`;
  counter = 0;
});
