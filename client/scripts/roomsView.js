var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(data) {
    // do something similar to renderMessage and render
    var storage = {};
    for(var i = 0; i < data.results.length; i++){
      storage[data.results[i]['roomname']] = 1;
    }
    for (var key in storage){
      RoomsView.renderRoom(key);
    }
  },
  renderRoom: function(room){
    if(!room.includes('<') && room.length > 0){
      $('select').append(`<option value="${room}">${room}</option>`);
    }
  }
};
