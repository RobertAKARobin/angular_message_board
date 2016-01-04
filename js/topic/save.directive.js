"use strict";

(function(){
  angular
  .module("topic")
  .directive("topicSave", topicSaveFn);

  function topicSaveFn(){
    return {
      templateUrl: "js/topic/save.html"
    }
  }
})();
