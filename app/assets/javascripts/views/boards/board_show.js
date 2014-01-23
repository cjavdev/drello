Drello.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  events: {},

  initialize: function () {
    this.listenTo(this.model, 'all', this.render);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    var view = new Drello.Views.ListsIndex({
      board: this.model,
      collection: this.model.lists()
    });
    this.$el.append(view.render().$el);
    return this;
  },

  leave: function () {
    this.remove();
  }
});
