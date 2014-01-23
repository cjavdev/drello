Drello.Collections.Lists = Backbone.Collection.extend({
  model: Drello.Models.List,

  url: function () {
    return '/api/boards/' + this.board.id + '/lists';
  }
});
