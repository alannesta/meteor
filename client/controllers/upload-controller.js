(function(){

  angular
       .module('deckbuilder')
       .controller('UploadController', uploadController);

  function uploadController($scope, $meteor){

      var self = this;
      self.card = {};
      self.cards =  $meteor.collection(Cards);
      console.log(self.cards);
      document.getElementById('image-upload').addEventListener('change', handleFileSelect);

      function handleFileSelect(evt) {
          var file = evt.target.files[0];
          var reader = new FileReader();
          reader.onload = (function() {
              return function(e) {
                  //var filePayload = e.target.result;
                  $scope.$apply(function(){
                      self.card.imageData = e.target.result;
                      document.getElementById('preview').src = e.target.result;
                  });

              };
          })();
          reader.readAsDataURL(file);
      }

      self.save = function(){
          self.cards.push(self.card);
      };

      $scope.$watch(function(){
          return self.card;
      }, function(val){
          //console.log(val);
      }, true);

  }
})();
