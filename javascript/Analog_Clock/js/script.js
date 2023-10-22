const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

//* ADICIONANDO EVENTO AO BOTAO MODE SWITCH:
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode"
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    //* PEGAR O TEMPO ATUAL E CALCULAR O ANGULO:
    let date = new Date();
    let secToDeg = (date.getSeconds() / 60) * 360;
    let minToDeg = (date.getMinutes() / 60) * 360;
    let hrToDeg = (date.getHours() / 60) * 360;
    
    //* FAZENDO PONTEIROS GIRAREM:
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

//? ATUALIZAR O TEMPO:
setInterval(updateTime, 1000);

//? ATUALIZAR O TEMPO AO CARREGAR A PÁGINA:
updateTime();