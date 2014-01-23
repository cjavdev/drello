Drello.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.leave);
  },

  events: {
    "click #add-card": "addCard"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  leave: function () {
    this.trigger('leave');
    this.remove();
  },

  addCard: function (event) {
    event.preventDefault();
    this.collection.create({ body: this.$('#body').val() });
  }
});
