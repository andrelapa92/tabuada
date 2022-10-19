const spanNum = document.getElementById("tab-num");
const tabTabuada = document.getElementById("tab-dados");
const divTabuada = document.getElementById("div-tabuada");
let numeroDigitado;

function tabuada(numeroDigitado) {
    numeroDigitado = document.getElementById("inputnum").value;
    tabTabuada.innerHTML = "";
    spanNum.innerHTML = numeroDigitado;
    if (numeroDigitado != "") {
        for (let i = 0; i <= 9; i++) {
            numeroDigitado * i;
            tabTabuada.innerHTML += numeroDigitado + ' * ' + i + ' = ' + numeroDigitado * i + '</br>';
            if (divTabuada.hasAttribute("hidden") == true) {
                divTabuada.removeAttribute("hidden");
            }
        }
    } else {
        if (divTabuada.hasAttribute("hidden") == false) {
            divTabuada.setAttribute("hidden", "true");
        }
        tabTabuada.innerHTML = "";
    }
}