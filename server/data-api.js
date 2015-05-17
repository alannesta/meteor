Meteor.methods({
    clearCollection: function () {
        Cards.remove({});
    },

    initCollection: function (dataSet) {
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

        var fs = Npm.require('fs');
        var Future = Npm.require('fibers/future');
        var fut = new Future();
        //console.log(__dirname);
        var path = '../../../../../public/data.json';
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                throw err;
            } else {
                //console.log(data);
                var data = JSON.parse(data);
                for (var key in data) {
                    //data[key].forEach(function (card) {
                    //    var find = Cards.find({name: card.name}).fetch();
                    //    var name = find[0] ? 'already in data base: ---> ' + find[0].name : 'not found, insert new card: ---> ' + card.name;
                    //    console.log(name);
                    //    if (filterCard(card) && !Cards.findOne({id: card.id})) {
                    //        Cards.insert(card);
                    //    }
                    //});
                    for (var i = 0; i < data[key].length; i++) {
                        var find = Cards.find({name: data[key][i].name}).fetch();
                        var name = find[0] ? 'already in data base: ---> ' + find[0].name : 'not found, insert new card: ---> ' + card.name;
                        console.log(name);
                        if (filterCard(data[key][i]) && !Cards.findOne({id: data[key][i].id})) {
                            Cards.insert(data[key][i]);
                        }
                    }
                }
                fut.wait();
            }
        });
        function filterCard(card) {
            return card.type === 'Minion' || card.type === 'Spell';
        }
    }
});