var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    Friends.toggleStatus();
    Rooms.add();
    Messages.submit();
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //use messagesview render
      console.log('Data ', data);
      MessagesView.render(data);
      RoomsView.render(data);
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
