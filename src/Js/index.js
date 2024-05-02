function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}


function calcular() {


    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}



document.querySelector('.botaoD').addEventListener('click', function () {
    var corpo = document.body;
    var elementosNomes = document.querySelectorAll('.nomes');

    // Alternar a cor de fundo do corpo
    corpo.style.backgroundColor = corpo.style.backgroundColor === 'rgb(255, 255, 255)' ? '#000' : '#fff';

    // Alternar a cor dos elementos com a classe 'nomes'
    elementosNomes.forEach(function (elemento) {
        elemento.style.color = corpo.style.backgroundColor === 'rgb(0, 0, 0)' ? '#fff' : '#000';
    });
});
