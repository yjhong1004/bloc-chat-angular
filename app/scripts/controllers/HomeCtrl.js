(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      // make Room.add function available to the view
      this.addRoom = Room.add;
    }

    angular
        .module('bloc-chat-angular')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

// dependency array
