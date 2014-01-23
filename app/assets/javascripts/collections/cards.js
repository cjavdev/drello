Drello.Collections.Cards = Backbone.Collection.extend({
  model: Drello.Models.Card,
  url: function () {
    return 'api/lists/' + this.list.id + '/cards';
  }
});
