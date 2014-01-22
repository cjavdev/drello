Drello.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = new Drello.Collections.Boards();
    this.boards.fetch();
  },

  routes: {
    '': "root",
    "boards/:id": 'show'
  },

  root: function () {
    var view = new Drello.Views.BoardsIndex({
      collection: this.boards
    });
    this._swapView(view);
  },

  show: function (id) {
    this._getBoard(id, function (board) {
      var view = new Drello.Views.BoardShow({
        model: board
      });
      this._swapView(view);
    }.bind(this));
  },

  _swapView: function (view) {
    this._currentView && this._currentView.leave();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _getBoard: function (id, callback) {
    var board = this.boards.get(id);
    if(!board) {
      board = new Drello.Models.Board({ id: id });
      board.collection = this.boards;
      board.fetch({
        success: function () {
          callback(board);
        },
      });
    } else {
      callback(board);
    }
  },
});
