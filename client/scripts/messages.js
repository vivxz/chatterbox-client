var Messages = {
  submit: function(){
    //going to grab whatever is in our input text msg box when clicked
    //successCB saying successful create of msg

    //id is message
    // $('.submit').on('click', function(){
      var message = {};
      var messageText = $('#message').val();
      var a = window.location.search;
      //find where = is
      var position = a.indexOf('=') + 1;
      var fixedUserName = a.slice(position);
      //slice after
      // console.log('username ' , a);
      message['username'] = fixedUserName;
      message['text'] = messageText;
      message['roomname'] = $('select').find(":selected").text();

      var success = function(){
        console.log('successfully post message')
      }
      // console.log('inside submit message')
      Parse.create(message, success);
    }
};