"use strict";

(function(){
  angular
  .module("topic")
  .directive("topicShow", topicShowFn);

  function topicShowFn(){
    return {
      templateUrl: "js/topic/show.html",
      link: function(scope){
        if(!scope.topic.comments) scope.topic.comments = [];
        scope.destroyConfirm = function(){
          if(window.confirm("Are you sure?")){
            scope.topic.vm.destroy();
          }
        }
      }
    }
  }
})();
