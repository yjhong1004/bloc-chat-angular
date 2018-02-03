(function() {
    function HomeCtrl(Room, Message, Username) {
      this.rooms = Room.all;
      // make Room.add function available to the view
      this.addRoom = Room.add;
      this.addUsername = Username.setUsername;
      this.currentUser = Username.getUsername;
      // need to make getByRoomId function available ot the view
      // so it can be run when the user clicks (ng-click) on a room name

      // when the user clicks
      // set the clicked room as the active room
      // use the room's id to get the messages by room id
      // make selected messages available to the view
      // so the view can display them

       this.messageSelect = function(room) {
         this.selectedRoom = room;
         console.log(room);
         this.messageRoom = Message.getByRoomId(room.$id);


       }
      this.newMessageSend = function (newMessage) {
        var message = {};
        // Get the message content - done
        // Get the current username
        message.username = Username.getUsername();
        // Get the current room ID
        message.roomId = this.selectedRoom.$id
        // Put all of the above into an object
        message.content = newMessage;
        Message.send(message);
      }
         // need to get send function available at the view
         // so it can run when the user clicks submit on submit button

       }


    angular
        .module('bloc-chat-angular')
        .controller('HomeCtrl', ['Room','Message','Username', HomeCtrl]);
})();

// dependency array
