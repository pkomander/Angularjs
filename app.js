angular.module('blog', []);

// angular.module('blog').controller('Rest', function($scope, $http){
//     $http.get('https://fakestoreapi.com/products')
//     .then(function(response){
//         $scope.publicacoes = response.data;
//     })
//     .catch(function(error){
//         console.error('Error na requisicao', error);
//     })
// })

angular.module('blog').controller('Rest', async function($scope, $http){
    $http.get('https://fakestoreapi.com/products')
    var consultaPlaceHolder = await fetch("https://fakestoreapi.com/products");
    var consultaConvertida = await consultaPlaceHolder.json();
    $scope.publicacoes = consultaConvertida;
    console.log(consultaConvertida);
})


//utilizar como exemplo para fazer requisicoes asincronas para uma API
//async function buscaToken(){
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Cookie", "ARRAffinity=0e5a036851de64e8b461905eeb538e1756630de611c59b3d2e24b7d57adc1e0d");

//     var raw = JSON.stringify({
//     "email": "emailUsuario",
//     "senha": "senhaUsuario"
//     });

//     var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//     };

//     var consultaPlaceHolder = await fetch("https://fakestoreapi.com/products",requestOptions);
//     var consultaConvertida = await consultaPlaceHolder.json();
//     return consultaConvertida.accessToken;
// }