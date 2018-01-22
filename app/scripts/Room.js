   /*

Room service – retrieves and saves room data to Firebase

*/

(function() {
  function Room($firebaseArray) {
    // Create an empty service object - anything attached to the service object becomes public
    var Room = {};
    // Use firebase to access the data at the rooms list in the database
    var ref = firebase.database().ref().child("rooms");
    // Use firebaseArray to translate the ref object into an array
    var rooms = $firebaseArray(ref);

    // Make the room list accessible to the controller by attaching it to the service object
    Room.all = rooms;

    Room.add = function(roomName) {
      rooms.$add({ name: roomName });
    }

    // return the service object to make it accessible in the controller
    return Room;
  }

  angular
    .module('bloc-chat-angular')
    .factory('Room', ['$firebaseArray', Room]);
})();
