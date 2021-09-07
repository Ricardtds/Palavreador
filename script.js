let textArea = document.getElementById('textAreaInput');
let newStr;
textArea.placeholder = "Eu tenho um estilo bem unico de assistir( shounen onde o personagem fica forte o tempo todo tomando proporções totalmente imagináveis, tem humor e poderzinho), nem vem me categorizar como otacu ou weeb, eu sou o hetero top dos animes";

function strReplace(){
    if (textArea.value == ""){
        newStr = textArea.placeholder;
    } else {
        newStr = textArea.value;
    }

    newStr = newStr.replace(/e/g, "é");
    newStr = newStr.replace(/o/g, "õ");
    newStr = newStr.replace(/u/g, "ú");
    newStr = newStr.replace(/a/g, "ã");
    putReplace();
}

function putReplace(){
    document.getElementById("textoPalavreado").innerHTML = newStr;
}


/*
eu tenho um estilo bem unico de assistir( shounen onde o personagem fica forte o tempo todo tomando proporções totalmente imagináveis, tem humor e poderzinho), nem vem me categorizar como otacu ou weeb, eu sou o hetero top dos animes

éú ténhõ úm éstilõ bém único dé ãssistir( shõunen õnde õ pérsonagém ficã fõrte õ témpõ tõdõ tõmãndõ prõpõrçõés tõtãlménté imãginávéis, tém húmõr é põdérzinhõ), ném vém mé cãtégõrizãr cõmõ õtacú õú wééb, éu sõu õ hétérõ tõp dõs ãnimé

*/