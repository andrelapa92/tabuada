const conteudo = document.getElementById("conteudo");

function divFatorial() {
    conteudo.innerHTML = '<label for="fatorialNum" class="mb-3">Calcule o fatorial do número a seguir:</label><BR><input id="fatorialNum" type="number" class="mb-4"><br><button class="btn btn-success mb-1" onclick="fatorial()">Calcular</button><div id="div-result-seq" class="mt-3"></div>';
}

function fatorial() {
    let num = document.getElementById("fatorialNum").value;
    for (let i = num; i >= 1; i--) {
        console.log(num * (num - 1));
    }
}