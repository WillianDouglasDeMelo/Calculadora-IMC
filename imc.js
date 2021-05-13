const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    
    if (nome !== '' && altura !== '' && peso !== ''){
    	const imc = (peso / Math.pow(altura, 2));
    	let ValorImc = '';
    	
    	if (imc < 18.5){
    		ValorImc = 'abaixo do peso.'; 
    	}else if (imc < 25){
    		ValorImc = 'com seu peso ideal.'; 
    	}else if (imc < 30){
    		ValorImc = 'levemente acima do peso.'; 
    	}else if (imc < 35){
    		ValorImc = 'com obesidade I'; 
    	}else if (imc < 40){
    		ValorImc = 'com obesidade II.'; 
    	}else{
    		ValorImc = 'com obesidade III, muito cuidado.'
    	}

    	resultado.textContent = ` ${nome} seu IMC é: ${imc} isso indica que você está ${ValorImc} `;
    
    }else{
    	resultado.textContent = 'Preenchaos campos obrigatórios';

    } 	
}
    

    

calcular.addEventListener('click', imc);