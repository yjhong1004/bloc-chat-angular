(function() {
  function Message($firebaseArray) {
    // Create an empty service object - anything attached to the service object becomes public
    var MessageFactory = {};
    // Use firebase to access the data at the rooms list in the database
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    MessageFactory.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    // Message.add = function(roomName) {
    //   rooms.$add({ name: roomName });
    // }
    // var messages = MessageFactory.getByRoomId('-KzVeXMwKlxl2E6sY9M8');
    // console.log(messages);
    // // return the service object to make it accessible in the controller

    MessageFactory.send = function(newMessage) {
       // Send method logic
      //  var newMessage = {};
      //  return $firebaseArray(ref.orderByChild('content').set(newMessage));
      console.log(newMessage);
      messages.$add(newMessage);
    };

    return MessageFactory;
  };

  angular
    .module('bloc-chat-angular')
    .factory('Message', ['$firebaseArray', Message]);
})();
