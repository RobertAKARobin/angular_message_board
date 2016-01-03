"use strict";

(function() {
  angular
  .module("grumble")
  .factory("Grumble", GrumbleFn);

  GrumbleFn.$inject = ["$firebase"];

  function GrumbleFn($firebase){
    var Grumble = new $firebase("grumbles");
    return Grumble;
  }
})();
