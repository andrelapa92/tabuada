let linhas = document.querySelectorAll("li");

function destacaTexto() {
    try {
        let inputTexto = document.getElementById("inputtext").value;
        for (let i = 0; i <= linhas.length; i++) {
            if (inputTexto != "") {
                if (linhas[i].innerHTML.toLowerCase().includes(inputTexto) == true) {
                    linhas[i].classList.add("strong");
                } else {
                    linhas[i].classList.remove("strong");
                }
            } else {
                linhas[i].classList.remove("strong");
            }
        }
    } catch (error) {
        console.log(error);
    }
}