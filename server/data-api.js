Meteor.methods({
    clearCollection: function() {
        Cards.remove({});
        return 'Cards collection cleaned';
    },

    initCollection: function() {
        var fs = Npm.require('fs');
        var path = '../../../../../public/data.json';

        var cb = function(data) {
            var data = JSON.parse(data);
            for (var key in data) {
                data[key].forEach(function(card) {
                    if (filterCard(card) && !Cards.findOne({id: card.id})) {
                        Cards.insert(card);
                    }
                });
            }
        };

        function filterCard(card) {
            return card.type === 'Minion' || card.type === 'Spell';
        }

        var readFileSync = Meteor.wrapAsync(fs.readFile);
        var result = readFileSync(path, 'utf-8');      // now readFile is "synchronous"
        cb(result);
        return 'Cards collection init success: ---> ' + process.cwd();
    }
});