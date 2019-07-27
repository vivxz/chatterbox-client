var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  renderMessage: function (message) {
    //loop through our data
    //if text has <, ignore
    var userName = message.username;
    var text = message.text;
    var roomName = message.roomname;
    if (userName === undefined) {
      userName = "";
    }
    if (roomName === undefined) {
      roomName = "";
    }
    if (!userName.includes('<') && userName.length > 0) {
      if (!text.includes('<') && text.length > 0) {
        if (!roomName.includes('<') && roomName.length > 0) {
          // var selected = $('select').find(":selected").text();
          // console.log('selected in render msg ', selected)
          // if (selected === roomName) {

          //invoke filter function //
          $('#chats').append(
            `<div class="chat ${roomName}">
                    <div class=${userName}>${userName}</div>
                    <div class="text">${text}</div>
                  </div>`)
          // }
        }
      }
    }
  },

  render: function (data) {
    for (var i = 0; i < data.results.length; i++) {
      MessagesView.renderMessage(data.results[i]);
      MessagesView.filterSelect(data.results[i])
    }
  },

  filterSelect: function (message) {
  //   $('select').on('change' ,function(){
  //       //if div chat
  //       var selected = $('select').find(":selected").text();
  //       if $(`${selected}`)
  //   })
  }
};
