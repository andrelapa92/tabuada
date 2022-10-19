let linhas = document.querySelectorAll("li");
console.log(linhas);

function destacaTexto() {
    let inputTexto = document.getElementById("inputtext").value;
    for (let i = 0; i <= linhas.length; i++) {
        console.log(linhas[i].innerHTML.includes(inputTexto));
        console.log(inputTexto);
        /*
        if (linhas[i].innerHTML.includes(inputTexto) == true) {
            console.log(linhas[i].innerHTML);
        }
        */
    }
}