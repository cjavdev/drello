Drello.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  initialize: function () {
    this._subViews = [];
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    var view = new Drello.Views.CardsIndex({
      collection: this.model.cards()
    });
    this._subViews.push(view);
    this.$('#cards').html(view.render().$el);
    return this;
  },

  leave: function () {
    this._subViews.forEach(function (view) {
      view.leave();
    });
    this.remove();
  }
});
