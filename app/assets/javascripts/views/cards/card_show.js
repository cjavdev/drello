Drello.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  popoverTemplate: JST['cards/popover'],

  initialize: function (options) {
    this.list = options.list;
    this.$el.draggable({
      revert: true
    });
  },

  attributes: function () {
    return {
      'data-card-id': this.model.id,
      'data-list-id': this.model.collection.list.id
    };
  },


  render: function () {
    var content = this.template({
      card: this.model
    });
    this.$el.html(content);
    this.$('#menu').popover({
      html: true,
      content: this.popoverTemplate(),
      title: "Card Actions"
    });
    return this;
  },

  leave: function () {
    this.remove();
  }
});
