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
    }
    return this._lists;
  }
});
