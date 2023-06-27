let titulo = document.getElementById('titulo');
        //alert(titulo.innerHTML);
        titulo.style = 'border: 5px dotted yellow; font-size: 30pt';
        titulo.style.backgroundColor = 'Green';
        var textNum1 = document.querySelector('#num1');
        var textNum2 = document.querySelector('#num2');
        var botao = document.getElementById('btVer');
        textNum1.value = 4.2;

        function verNum() {
            result.innerHTML = "Informe um valor maior que 0!"
        }

        textNum1.onmouseout = function(){
                result.innerHTML = "";
        };

        botao.onclick = function(){
            if(parseFloat(textNum1.value) > parseFloat(textNum2.value)){
                result.innerHTML = 'O maior valor é o primeiro';
            }else if(parseFloat(textNum2.value) > parseFloat(textNum1.value)){
                result.innerHTML = 'O maior valor é o segundo';
            }else{
                resul.innerHTML = 'Os valores são iguais';  
            }
        };

            // ultilizando somente os id para selecionar os elementos 


            vlr2.onkeyup = function(){
                if (parseInt(vlr2.value) < parseInt(vlr1.value)){
                    verif.innerHTML = "O valor deve ser maior que o valor inicial.";
                    verif.style.color= 'red';
                }else{
                    verif.innerHTML = 'OK';
                    verif.style.color ='green'
                }
            };

    btGerar.onclick = function(){
        multiplos.innerHTML = '<h2>Multiplos de 4 </h2>';
        lista = '<ul>';
        for(var i = parseInt(vlr1.value); i <= parseInt(vlr2.value); i++ ){
            if( i % 4 === 0){
                lista += '<li>'+ i + '</li>';
            }
            
        }
        lista += '</ul>';
        multiplos.innerHTML += lista;
    };                                     













