/* ========================================= */
/* ACESSIBILIDADE */
/* ========================================= */

const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");

const toggleTheme =
document.getElementById("toggleTheme");

const startReading =
document.getElementById("startReading");

const stopReading =
document.getElementById("stopReading");

let currentFontSize = 100;

/* AUMENTAR FONTE */

increaseFont.addEventListener("click", () => {

    currentFontSize += 10;

    document.body.style.fontSize =
    currentFontSize + "%";
});

/* DIMINUIR FONTE */

decreaseFont.addEventListener("click", () => {

    currentFontSize -= 10;

    if(currentFontSize < 70){
        currentFontSize = 70;
    }

    document.body.style.fontSize =
    currentFontSize + "%";
});

/* TEMA */

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* LEITURA POR VOZ */

let speech = null;

startReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const content =
    document.getElementById("mainContent").innerText;

    speech =
    new SpeechSynthesisUtterance(content);

    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

});

/* PARAR LEITURA */

stopReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});