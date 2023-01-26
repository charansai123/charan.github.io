var text;
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
    var nInput = document.getElementById("nInput");
    if (nInput.value <= 0) {
        alert("Please enter a positive number.");
        e.preventDefault();
        return false;
    }
});


function loadFile() {
    var input = document.getElementById("fileInput");
    var file = input.files[0];

    var reader = new FileReader();
    reader.onload = function () {
        text = reader.result;
    };
    reader.readAsText(file);
}

function countWords() {
    var n = document.getElementById("nValue").value;
    var wordCount = {};
    var words = text.split(/[^\w']+/);

    for (var i = 0; i < words.length; i++) {
        wordCount[words[i].toLowerCase()] = (wordCount[words[i].toLowerCase()] || 0) + 1;
    }

    var sortedWords = Object.keys(wordCount).sort(function (a, b) {
        return wordCount[b] - wordCount[a];
    });

    var wordTable = document.getElementById("wordTable");
    wordTable.innerHTML = "";
    var row = wordTable.insertRow();
    var SlCell = row.insertCell(0);
    var wordCell = row.insertCell(1);
    var countCell = row.insertCell(2);

    SlCell.innerHTML = "Sl.No";
    wordCell.innerHTML = "Word";
    countCell.innerHTML = "Frequency";

    for (var i = 0; i < n; i++) {

        var row = wordTable.insertRow();
        var SlCell = row.insertCell(0);
        var wordCell = row.insertCell(1);
        var countCell = row.insertCell(2);
        SlCell.innerHTML = i + 1;
        wordCell.innerHTML = sortedWords[i];
        countCell.innerHTML = wordCount[sortedWords[i]];
    }
}
