const textareaElement = document.getElementById('textBox');
const btnElement = document.getElementById('btnCountWords');
const wordCountElement = document.getElementById('wordCount');

btnElement.addEventListener("click", () => { 
    console.log('botão foi clicado')
});

console.log(textareaElement.value);

let wordCount;
if (textareaElement.value.length < 1) {
    wordCount = 0;
} else {
    wordCount = textareaElement.value.split(" ").length;
}


wordCountElement.innerText = wordCount;