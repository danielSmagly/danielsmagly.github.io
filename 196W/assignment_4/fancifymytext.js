
/* JS Functions document */

function bigger() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function modifyText() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = 'underline';
}

function undoChanges() {
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = 'initial';
}

function moo() {
    var input_text = document.getElementById('textarea').value;
    input_text = input_text.toUpperCase();
    var parts = input_text.split(".");
    input_text = parts.join("-Moo")
    document.getElementById("textarea").value = input_text;
}
    