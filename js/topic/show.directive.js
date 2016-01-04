"use strict";

(function(){
  angular
  .module("topic")
  .directive("topicShow", topicShowFn);

  function topicShowFn(){
    return {
      templateUrl: "js/topic/show.html",
      scope: {
        topic: "="
      },
      link: function(scope, element, attributes){
        scope.destroyConfirm = function(){
          if(window.confirm("Are you sure?")){
            scope.topic.vm.destroy();
          }
        }
      }
    }
  }
})();
