Drello.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

  events: {
    "click .well": "openBoard"
  },

  initialize: function () {
    this.listenTo(this.collection, 'all', this.render);
  },

  render: function () {
    var content = this.template({
      boards: this.collection
    });
    this.$el.html(content);
    return this;
  },

  leave: function () {
    this.remove();
  },

  openBoard: function (event) {
    var boardId = $(event.currentTarget).data('id');
    Backbone.history.navigate('#/boards/' + boardId, { trigger: true });
  },
});
