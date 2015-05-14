Meteor.methods({
    clearCollection: function () {
        Cards.remove({});
    }
});