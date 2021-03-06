function statusChangeCallback(response) {  // Chamado com os resultados de FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // O status de login atual da pessoa.
  if (response.status === 'connected') {   // Logado em sua página da web e Facebook.
    testAPI();
  }
}


function login() {
  FB.login(function(response) {
    console.log(response)
    if (response.status === 'connected') {
      document.getElementById('btnFacebook').innerHTML = 'Conectado';
      document.getElementById('btnFacebook').style.background = 'green';

      const userId = response.authResponse.userID;
      document.getElementById('img-usuario').innerHTML = '<img src="https://graph.facebook.com/' + userId + '/picture" alt="' + response.name + '"/>';
      //Conectado à sua página da web e Facebook.
    } else {
      // a pessoa não está logada em sua página da web ou não podemos saber. 
    }
  })
}

var botaoPublicarPost = document.getElementById('botaoPublicar');
botaoPublicarPost.addEventListener('click', function() {
  var body = 'Lendo documentação JS SDK ';
  FB.api('/me/feed', 'post', { message: body }, function(response) {
    console.log(response);
    if (!response || response.error) {
      
      alert('Ocorreu um erro, permissão negada.');
    } else {
      alert('Post ID: ' + response.id);
    }
  });

})


function checkLoginState() {               // Chamado quando uma pessoa termina com o botão de login.
  FB.getLoginStatus(function(response) {   // Veja o manipulador de onlogin 
    statusChangeCallback(response);
  });
}


window.fbAsyncInit=function() {
  FB.init({
    appId: '4316391405155414',
    cookie: true,                     //  Habilite os cookies para permitir que o servidor acesse a sessão
    xfbml: true,                     // Analise os plug-ins sociais nesta página da web.
    version: 'v12.0'           // Use esta versão da API Graph para esta chamada.
  });


  // FB.getLoginStatus(function(response) {   // Chamado depois que o JS SDK foi inicializado.
  //   statusChangeCallback(response);        // Retorna o status de login.
  // });
};

function testAPI() {                      // Testando Graph API após o login.  Veja statusChangeCallback() para saber quando esta chamada é feita..
  console.log('Bem-vindo! Buscando suas informações ....');
  FB.api('/me', function(response) {
    // console.log('Login bem-sucedido para: ' + response.name);
    // document.getElementById('status').innerHTML =
    //   'Obrigado por fazer login, ' + response.name + '!';

    console.log(response)
    document.getElementById('perfil-conectado').innerHTML = response.name;
  });
}



