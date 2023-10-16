function tempConvert() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var resposta = document.getElementById("resposta");

    if (document.getElementById('celsius').checked == true) {
        resposta.innerTMHL = cToF(temperatura);
    }

    if (document.getElementById('fahrenheit').checked == true) {
        resposta.innerHTML = fToC(temperatura);
    }
}

function cToF (x) {
    return (x * 9/5) + 32;
}

function fToC (x) {
    return (x - 32) * 5/9;
}