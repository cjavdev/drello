Drello.Views.CardsIndex = Backbone.View.extend({
  template: JST['cards/index'],

  initialize: function (options) {
    this.list = options.list;
    this._subViews = [];
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function (card) {
      var subView = new Drello.Views.CardShow({
        list: this.list,
        model: card
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
