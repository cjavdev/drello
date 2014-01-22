window.Drello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $header = $('#header'),
        $main   = $('#main');

    new Drello.Router({
      $rootEl: $main
    });

    Backbone.history.start();
  }
};

$(Drello.initialize);
