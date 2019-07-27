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
    if (!userName.includes('<') && userName.length > 0) {
      if (!text.includes('<') && text.length > 0) {
        if (!roomName.includes('<') && roomName.length > 0) {
          $('#chats').append(
            `<div class="chat">
                  <div class=roomName></div>
                  <div class="username">${userName}</div>
                  <div class="text">${text}</div>
                </div>`)
        }
      }
    }
  },

  render: function (data) {
    for (var i = 0; i < data.results.length; i++) {
      MessagesView.renderMessage(data.results[i])
    }
  }
};
