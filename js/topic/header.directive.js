"use strict";

(function(){
  angular
  .module("topic")
  .directive("topicHeader", topicHeaderFn);

  topicHeaderFn.$inject = ["Topic"];

  function topicHeaderFn(Topic){
    return {
      templateUrl: "js/topic/header.html",
      replace: true,
      link: function(scope, element, attributes){
        loadNewTopic();
        function loadNewTopic(){
          var newTopic = Topic.new(), saveFn = newTopic.vm.save;
          scope.newTopic = newTopic;
          newTopic.vm.save = function(){
            saveFn(loadNewTopic);
          }
        }
      }
    }
  }
})();
