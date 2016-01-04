"use strict";

(function(){
  angular
  .module("comment")
  .directive("commentShow", commentShowFn);

  commentShowFn.$inject = ["Comment"];

  function commentShowFn(Comment){
    return {
      templateUrl: "js/comment/show.html",
      scope: {
        topic: "=",
        comment: "="
      },
      link: function(scope, element, attributes){
        scope.delete = function(){
          var index = scope.topic.comments.indexOf(scope.comment);
          scope.topic.comments.splice(index, 1);
          scope.topic.vm.save();
        }
      }
    }
  }
})();
