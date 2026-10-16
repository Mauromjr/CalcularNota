var botao = document.getElementById("calcular");

botao.addEventListener("mouseenter", function () {
    botao.style.backgroundColor = "lightblue";
    botao.innerText = "Clique para calcular!";
});

botao.addEventListener("mouseleave", function () {
    botao.style.backgroundColor = "";
    botao.innerText = "Calcular média";
});

botao.addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var resultado = document.getElementById("resultado");

    if (nome === "" || nota1 === "" || nota2 === "") {
        resultado.innerText = "Preencha todos os campos!";
        resultado.style.color = "red";
    } else if (Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10) {
        resultado.innerText = "As notas devem estar entre 0 e 10!";
        resultado.style.color = "red";
    } else {
        var media = (Number(nota1) + Number(nota2)) / 2;

        if (media >= 7) {
            resultado.innerText = nome + " - Média: " + media.toFixed(1) + " - Aprovado!";
            resultado.style.color = "green";
        } else {
            resultado.innerText = nome + " - Média: " + media.toFixed(1) + " - Reprovado!";
            resultado.style.color = "red";
        }
    }
});
