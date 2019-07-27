var Messages = {
  submit: function(){
    //going to grab whatever is in our input text msg box when clicked
    //successCB saying successful create of msg

    //id is message
    $('.submit').on('click', function(){
      var message = {};
      var messageText = $('#message').val();
      // message[username] = ;
      message[text] = messageText;
      // message[roomname] = ;

      console.log('message inside submit ', message)
      var success = function(){
        console.log('successfully post message')
      }
      // console.log('inside submit message')
      Parse.create(message, success);
    })
  }
};