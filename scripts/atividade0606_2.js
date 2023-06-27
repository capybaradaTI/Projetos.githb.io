function verificarMaiorNumero() {
      
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);

    
    var maiorNumero = Math.max(numero1, numero2, numero3);

    
    var mensagem = "O maior número é o: " + maiorNumero;
    document.getElementById("resultado").textContent = mensagem;

    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("numero3").value = "";
}