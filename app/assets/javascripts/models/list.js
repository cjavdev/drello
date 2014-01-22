Drello.Models.List = Backbone.Model.extend({
  parse: function (data) {
    if(data.cards) {
      this.cards().set(data.cards, { parse: true });
      delete data.cards;
    }
    return data;
  },

  cards: function () {
    if(!this._cards) {
      this._cards = new Drello.Collections.Cards();
    }
    return this._cards;
  }
});
