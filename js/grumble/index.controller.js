"use strict";

(function() {
  angular
  .module("grumble")
  .controller("GrumbleIndexController", GrumbleIndexControllerFn);

  GrumbleIndexControllerFn.$inject = ["Grumble"];

  function GrumbleIndexControllerFn(Grumble){
    var viewModel = this;
    Grumble.$loaded().then(function(){
      viewModel.grumbles = Grumble.all();
    });
  }
})();
