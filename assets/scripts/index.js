const textarea = document.getElementById("textWords");
const button = document.getElementById("buttonCount");
const wordCount = document.getElementById("wordNumber");

button.addEventListener("click", () => {
    let wordNumber;
    if (textarea.value.length < 1) {
        wordNumber = 0;
    } else {
        wordNumber = textarea.value.split(" ").length
    }
    wordCount.innerText = wordNumber;
});
