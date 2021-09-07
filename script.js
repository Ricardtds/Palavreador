let copyText = document.getElementById("accordionPalavrearBody")
let textArea = document.getElementById('textAreaInput');
let newStr;
textArea.placeholder = "Quando as pessoas vieram para a América, nos trouxeram com elas. Nós somos os antigos. Mas há novos deuses na América. Agora eles querem nos destruir. Guerras estão chegando e eu tenho um grande papel para você. Shadow Moon. Eu vou acabar com ele. Eu vou acabar com todos eles.";

function strReplace(){
    if (textArea.value == ""){
        newStr = textArea.placeholder;
    } else {
        newStr = textArea.value;
    }
    newStr = newStr.replace(/(\r\n|\r|\n)/gi, '<br>');
    newStr = newStr.replace(/a/g, "ã").replace(/A/g, "Ã");
    newStr = newStr.replace(/e/g, "é").replace(/E/g, "É");
    newStr = newStr.replace(/o/g, "õ").replace(/O/g, "Õ");
    newStr = newStr.replace(/u/g, "ú").replace(/U/g, "Ú");
    putReplace();
}

function putReplace(){
    document.getElementById("accordionPalavrearBody").innerHTML = newStr;
}

function copyPalavreado() {
    if(copyText.innerText == ""){
        strReplace();
    }
    navigator.clipboard.writeText(copyText.innerText);
} 