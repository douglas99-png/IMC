document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    const imcValor = document.getElementById('imc-valor');
    const imcClassificacao = document.getElementById('imc-classificacao');
    const resultado = document.getElementById('resultado');

    imcValor.textContent = imc;
    resultado.classList.remove('resultado-oculto');

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    imcClassificacao.textContent = `Classificação: ${classificacao}`;
});
