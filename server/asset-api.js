// allcards.json should be "/private"
Assets.getText('allcards.json', function(err, data){
   console.log(typeof data);
});