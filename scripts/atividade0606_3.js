function converterTexto() {
 
  var inputText = document.getElementById("texto").value;

 
  var textoConvertido = inputText.toUpperCase();

 
  document.getElementById("textoConvertido").textContent = textoConvertido;

 
  var numCaracteres = inputText.length;
  document.getElementById("numCaracteres").textContent = numCaracteres;
}
