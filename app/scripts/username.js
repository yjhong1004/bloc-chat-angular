(function() {
  function BlocChatCookies($cookies) {
    var Username = {};
    Username.setUsername = function (username){
      $cookies.put('blocChatCurrentUser', username);
      }
    Username.getUsername = function (){
      return $cookies.get('blocChatCurrentUser');
      }
    return Username 
  }

  angular
    .module('bloc-chat-angular')
    .factory('Username', ['$cookies', BlocChatCookies]);
})();
