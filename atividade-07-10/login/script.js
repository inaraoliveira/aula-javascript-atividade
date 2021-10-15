const botao = document.getElementById('botao');
var campoUsuario = document.getElementById('usuario');
var campoSenha = document.getElementById('senha');

botao.addEventListener('click', () => {
    if(campoUsuario.value == "" && campoSenha.value == ""){
        alert('Usuário e/ou Senha estão inválidos.')
    }
    else{
        alert('Você será direcionado para nossa página principal.')
    }
})