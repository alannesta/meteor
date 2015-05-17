Meteor.methods({
    clearCollection: function () {
        Cards.remove({});
    },

    initCollection: function(dataSet) {
        //Object.keys(dataSet).forEach(function(key) {
        //    dataSet[key].forEach(function(card){
        //        var find = Cards.find({name: card.name}).fetch();
        //        var name = find[0]? 'already in data base: ---> ' + find[0].name : 'not found, insert new card: ---> ' + card.name;
        //        console.log(name);
        //        if (filterCard(card) && !Cards.findOne({id: card.id})){
        //            Cards.insert(card);
        //        }
        //    })
        //});
        //
        //function filterCard(card) {
        //    return card.type === 'Minion' || card.type === 'Spell'

        var fs = Npm.require('fs');
        var path = '../../../../../public/data.json';
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err){
                //throw new Meteor.Error(err.toString());
                throw err;
            } else {
                new Meteor.Error(data.toString());
            }
        });
    }
});