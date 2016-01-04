"use strict";

(function(){
  angular
  .module("comment")
  .directive("commentSave", commentSaveFn);

  commentSaveFn.$inject = ["Comment"];

  function commentSaveFn(Comment){
    return {
      templateUrl: "js/comment/save.html",
      scope: {
        topic: "="
      },
      link: function(scope, element, attributes){
        scope.save = function(){
          scope.topic.comments.push(scope.comment);
          scope.topic.vm.save(loadNewComment);
        }
        function loadNewComment(){
          scope.comment = {};
        }
      }
    }
  }
})();
