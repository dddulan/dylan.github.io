fancifymytext.js
function showAlert() {
    alert("Radio button changed");
}

function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

function removeStyles() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "normal";
    textInput.style.color = "initial";
    textInput.style.textDecoration = "none";
}

function makeTextMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
        sentences[i] = words.join(" ");
    }
    textInput.value = sentences.join(".");
}
