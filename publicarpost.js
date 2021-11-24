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

var carregaArquivo = function(event){
    var leitura = new FileReader();
    leitura.onload = function() {
        var btnFecha = document.querySelector('.fecha-preview-js');
        var saida = document.getElementById("publicacao");

        saida.style.display = "block";
        saida.style.backgroundImage = "url("+ leitura.result + ")";
    }
    leitura.readAsDataURL(event.target.files[0]);

}

