Drello.Views.ListsIndex = Backbone.View.extend({
  template: JST['lists/index'],

  initialize: function (options) {
    this.board = options.board;
    this._subViews = [];
  },

  render: function () {
    var self = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function (list) {
      var subView = new Drello.Views.ListShow({
        board: self.board,
        model: list
      });
      this._subViews.push(subView);
      this.$el.append(subView.render().$el);
    }, this);
    return this;
  },

  leave: function () {
    this._subViews.forEach(function (view) {
      view.leave();
    });
    this.remove();
  }
});
