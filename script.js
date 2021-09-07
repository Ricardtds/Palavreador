let textArea = document.getElementById('textAreaInput');
let newStr;
textArea.placeholder = "Eu tenho um estilo bem unico de assistir( shounen onde o personagem fica forte o tempo todo tomando proporções totalmente imagináveis, tem humor e poderzinho), nem vem me categorizar como otacu ou weeb, eu sou o hetero top dos animes";

function strReplace(){
    if (textArea.value == ""){
        newStr = textArea.placeholder;
    } else {
        newStr = textArea.value;
    }
    newStr = newStr.replace(/(\r\n|\r|\n)/gi, '<br>');
    newStr = newStr.replace(/e/gi, "é");
    newStr = newStr.replace(/o/gi, "õ");
    newStr = newStr.replace(/u/gi, "ú");
    newStr = newStr.replace(/a/gi, "ã");
    putReplace();
}

function putReplace(){
    document.getElementById("accordionPalavrearBody").innerHTML = newStr;
}

function copyPalavreado() {
    var copyText = document.getElementById("accordionPalavrearBody").innerText
    if(copyText == ""){
        strReplace();
        copyText = document.getElementById("accordionPalavrearBody").innerText
    }
    navigator.clipboard.writeText(copyText);
} 