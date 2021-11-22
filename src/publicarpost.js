var publicarpostagem = document.getElementById('publicar');
var postagem = document.querySelector('.post');

publicarpostagem.addEventListener('click',function(){

    if(postagem.style.display === 'block'){
        postagem.style.display = 'none';
    } else{
        postagem.style.display = 'block';
    }
});
var painelControle= document.getElementById('inicio');
var dash = document.querySelector('.icon');

painelControle.addEventListener('click',function(){
    if (postagem.style.display === 'block'){
        dash.style.display = 'none'
    } else{
        dash.style.display = 'block';
    }
});


