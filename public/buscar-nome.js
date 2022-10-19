let linhas = document.querySelectorAll("li");
console.log(linhas);

function destacaTexto() {
    let inputTexto = document.getElementById("inputtext").value;
    for (let i = 0; i <= linhas.length; i++) {
        console.log(linhas[i].innerHTML);
        console.log(inputTexto);
        if (linhas[i].innerHTML.includes(inputTexto)) {
            console.log(linhas[i].innerHTML);
        }
    }
}