Meteor.methods({
    clearCollection: function () {
        Cards.remove({});
    },

    initCollection: function () {
        var fs = Npm.require('fs');
        var Fiber = Npm.require('fibers');
        var path = '../../../../../public/data.json';
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                throw err;
            } else {
                //console.log(data);
                var data = JSON.parse(data);

                for (var key in data) {
                    Fiber(function () {
                        data[key].forEach(function (card) {
                            var find = Cards.find({name: card.name}).fetch();
                            if (filterCard(card) && !Cards.findOne({id: card.id})) {
                                Cards.insert(card);
                            }
                        });
                        Fiber.yield();
                    }).run();
                }
                return 'done';
            }
        });
        function filterCard(card) {
            return card.type === 'Minion' || card.type === 'Spell';
        }
    }
});