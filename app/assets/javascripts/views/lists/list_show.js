Drello.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  className: 'col-md-3',

  attributes: function () {
    return {
      'data-id': this.model.id
    };
  },

  events: {
    'click #add-card': 'addCardForm'
  },

  initialize: function (options) {
    this.board = options.board;
    this._subViews = [];
    var self = this;
    setTimeout(function () {
      self.$el.droppable({
        hoverClass: 'hl',
        drop: function (event, ui) {
          var toListId = $(event.target).data('id');
          var fromListId = $(ui.draggable).data('list-id');
          var card = $(ui.draggable).data('card-id');
          if(toListId !== fromListId) {
            self.board.swapCard(toListId, fromListId, card);
          }
        }
      });
    }, 300);
    this.listenTo(this.model.cards(), 'all', this.render);
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    var view = new Drello.Views.CardsIndex({
      list: this.model,
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
  },

  addCardForm: function (event) {
    event.preventDefault();
    var view = new Drello.Views.CardForm({
      model: new Drello.Models.Card(),
      collection: this.model.cards()
    });
    this.listenTo(view, 'leave', this.render);
    this.$('#new-card').html(view.render().$el);
  }
});
