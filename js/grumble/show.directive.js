"use strict";

(function(){
  angular
  .module("grumble")
  .directive("grumbleShow", grumbleShowFn);

  function grumbleShowFn(){
    return {
      templateUrl: "js/grumble/show.html",
      scope: {
        grumble: "="
      },
      link: function(scope, element, attributes){

      }
    }
  }
})();
