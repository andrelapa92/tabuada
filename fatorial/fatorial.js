const conteudo = document.getElementById("conteudo");

function divFatorial() {
    conteudo.innerHTML = '<label for="fatorialNum">Calcule o fatorial do número a seguir:</label><input id="fatorialNum" type="number" class="mb-2"><br><button class="btn btn-success mb-1" onclick="fatorial()">Verificar</button><div id="div-result-seq" class="mt-3"></div>';
}