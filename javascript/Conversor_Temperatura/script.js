const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

// COLOCANDO O FOCO NO CELSIUS QUANDO ATUALIZAR A PÁGINA:
window.addEventListener("load", () => celsius.focus());

// CONVERTER CELSIUS PARA FAHRENHEIT QUANDO O VALOR DE CELSIUS MUDAR:
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    // LIMPAR O FAHRENHEIT QUANDO O CELSIUS ESTIVER LIMPO:
    if (!celsius.value) {
        fahrenheit.value = "";
    }
});

// CONVERTER FAHRENHEIT PARA CELSIUS QUANDO O VALOR DE CELSIUS MUDAR:
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    // LIMPAR O CELSIUS QUANDO O FAHRENHEIT ESTIVER LIMPO:
    if (!fahrenheit.value) {
        celsius.value = "";
    }
});