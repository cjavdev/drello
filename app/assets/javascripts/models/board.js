Drello.Models.Board = Backbone.Model.extend({
  parse: function (data) {
    if(data.lists) {
      this.lists().set(data.lists, { parse: true });
      delete data.lists;
    }
    return data;
  },

  lists: function () {
    if(!this._lists) {
      this._lists = new Drello.Collections.Lists();
      this._lists.board = this;
    }
    return this._lists;
  },

  swapCard: function (toListId, fromListId, cardId) {
    var toList   = this.lists().get(toListId),
        fromList = this.lists().get(fromListId),
        card     = fromList.cards().get(cardId);

    fromList.cards().remove(card);
    toList.cards().add(card);
    card.set({ list_id: toListId });
    card.save();
  }
});
