"use strict";

(function(){
  angular
  .module("grumble")
  .directive("grumbleHeader", grumbleHeaderFn);

  grumbleHeaderFn.$inject = ["Grumble"];

  function grumbleHeaderFn(Grumble){
    return {
      templateUrl: "js/grumble/header.html",
      replace: true,
      link: function(scope, element, attributes){
        loadNewGrumble();
        function loadNewGrumble(){
          var newGrumble = Grumble.new(), saveFn = newGrumble.vm.save;
          scope.newGrumble = newGrumble;
          newGrumble.vm.save = function(){
            saveFn(loadNewGrumble);
          }
        }
      }
    }
  }
})();
