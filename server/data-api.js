Meteor.methods({
    clearCollection: function () {
        Cards.remove({});
    },

    initCollection: function () {
        var fs = Npm.require('fs');
        //var path = '../../../../../public/allcards.json';
        var dir = '../web.browser/app/data.json';
        var allfiles = fs.readdirSync(dir);
        return allfiles;
        //var path ='data.json';
        //// Metoer Assets API, no Fiber needed!
        //Assets.getText(path, function (err, data) {
        //    if (err) {
        //        throw err;
        //    } else {
        //        //console.log(data);
        //        var data = JSON.parse(data);
        //
        //        for (var key in data) {
        //            data[key].forEach(function (card) {
        //                if (filterCard(card) && !Cards.findOne({id: card.id})) {
        //                    Cards.insert(card);
        //                }
        //            });
        //        }
        //    }
        //});

        return 'done';

        function filterCard(card) {
            return card.type === 'Minion' || card.type === 'Spell';
        }
    }
});