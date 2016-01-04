"use strict";

(function() {
  angular
  .module("topic")
  .controller("TopicIndexController", TopicIndexControllerFn);

  TopicIndexControllerFn.$inject = ["Topic"];

  function TopicIndexControllerFn(Topic){
    var viewModel = this;
    Topic.$loaded().then(function(){
      viewModel.topics = Topic.all();
    });
  }
})();
