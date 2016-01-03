"use strict";

(function(){
  angular
  .module("grumble")
  .directive("grumbleSave", grumbleSaveFn);

  function grumbleSaveFn(){
    return {
      templateUrl: "js/grumble/save.html",
      scope: {
        grumble: "="
      },
      link: function(scope, element, attributes){

      }
    }
  }
})();
