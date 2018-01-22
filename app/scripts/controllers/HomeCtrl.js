(function() {
    function HomeCtrl(Room, Message) {
      this.rooms = Room.all;
      // make Room.add function available to the view
      this.addRoom = Room.add;
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
    }


    angular
        .module('bloc-chat-angular')
        .controller('HomeCtrl', ['Room','Message', HomeCtrl]);
})();

// dependency array
