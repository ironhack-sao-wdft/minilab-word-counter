
const textareaElement = document.getElementById("textBox");
const countWordsbtn = document.getElementById("countWordsButton");
const wordCountElement = document.getElementById("wrdCounter");

countWordsbtn.addEventListener("click", () => {
    console.log(textareaElement.value);

    let countOfWords;

    if (textareaElement.value.length < 1) {
     countOfWords = 0;
    } else {
     countOfWords = textareaElement.value.split(' ').length;
    }

    wordCountElement.innerText = countOfWords;
});
