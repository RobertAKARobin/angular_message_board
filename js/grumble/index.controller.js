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
      loadNewGrumble();
    });
    function loadNewGrumble(){
      var saveFunction;
      viewModel.newGrumble = Grumble.new();
      saveFunction = viewModel.newGrumble.vm.save;
      viewModel.newGrumble.vm.save = function(){
        saveFunction(loadNewGrumble);
      }
    }
  }
})();
