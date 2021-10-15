const limpar = document.getElementById('limpar');
const igual = document.getElementById('igual');
const botoes = document.getElementById('botoes');
var resultado = document.getElementById('campoResultado');

botoes.addEventListener('click', (e) => {
    if(e.target.id == 'botoes'){
        return
    }
    else{
        resultado.value += e.target.value;
    }
});

limpar.addEventListener('click', () => {
    resultado.value = "";
});

igual.addEventListener('click', () =>{
    let resultadoFinal = eval(resultado.value);
    document.getElementById('campoResultado').value = resultadoFinal;
});