function calcularTotal() {
    let inputPreco = document.getElementById("preco").value;
    let inputQuantidade = document.getElementById("quantidade").value;

    let preco = Number(inputPreco);
    let quantidade = Number(inputQuantidade);

    let total = preco * quantidade;

    document.getElementById("resultado").innerText = "Total da compra: R$ " + total.toFixed(2);
}