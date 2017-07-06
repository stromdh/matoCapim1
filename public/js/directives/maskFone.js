angular.module('Sbecker').directive('maskFone', function(){
  return{
    link: function(scope, element, attributes){
      console.log(scope);
      console.log(element);
      console.log(attributes);
    }
  };
});
