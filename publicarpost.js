var publicarpostagem = document.getElementById('publicar');
var inicio = document.getElementById('inicio');
// var postagem = document.querySelector('.post');
var conteudos = document.querySelectorAll('.card');

publicarpostagem.addEventListener('click',function(){
    mostrarConteudo('publicarPost')
});

inicio.addEventListener('click',function(){
    mostrarConteudo('dashboard')
});


function esconderConteudo(){
    conteudos.forEach(element => {
        element.style.display = 'none';
    });
}

function mostrarConteudo(conteudoId) {
    esconderConteudo()
    const conteudo = document.getElementById(conteudoId);
    conteudo.style.display = 'block';
}

mostrarConteudo('dashboard')