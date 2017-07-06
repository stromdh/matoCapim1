angular.module('Sbecker').controller('MainCtrl', function($scope, $location){
  //$scope.message = "oi Fabi!!";

})
angular.module('Sbecker').controller('empresaCtrl', function($scope, $location){
  //$scope.message = "oi Fabi!!";

})
angular.module('Sbecker').controller('atletasCtrl', function($scope, $document){
  //$scope.message = "oi Fabi!!";

  $scope.atletas = [
    {
      id: 'marcio',
      nome: 'Márcio Gonzaga de Azevedo',
      foto: 'image/marcioAzevedo.jpg',
      idade: 21,
      posicao: 'lateral esquerdo',
      clube: 'Shakhtar Donetsk',
      nasc: '05/02/86',
      altura: '1.73',
      peso: '82'
    },
    {
      id: 'jackson',
      nome: 'Jackson de Souza',
      foto: 'image/jackson.jpg',
      idade: 27,
      posicao: 'Zagueiro',
      clube: 'Palmeiras',
      nasc: '01/05/90',
      altura: '1.86',
      peso: '79'
    },
    {
      id: 'elton',
      nome: 'Elton Junior Melo Ataíde',
      foto: 'image/elton3.png',
      idade: 31,
      posicao: 'Volante',
      clube: 'Ponte Preta',
      nasc: '17/03/90',
      altura: '1.80',
      peso: '77'
    }
  ];

  $scope.populaModal = function(element){
    alert(this);
    var atributo = $(element).attr('id');

    alert(element);

    // if(atributo == 'marcio'){
    //   console.log(atributo);
    //
    // }else if(atributo == 'jackson'){
    //   console.log(atributo);
    //
    // }else if(atributo == 'elton'){
    //   console.log(atributo);
    //
    // }else{
    //   console.log('não leu o id');
    // }
  }

})
angular.module('Sbecker').controller('contatoCtrl', function($scope, $http){
  //$scope.message = "oi Fabi!!";
  $scope.contato = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  $scope.enviar = function(formContato){
    var teste = $scope.contato;
    alert (teste.nome);
  }

  // -----


});
