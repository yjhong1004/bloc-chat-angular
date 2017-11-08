(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('bloc-chat-angular')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

// dependency array
