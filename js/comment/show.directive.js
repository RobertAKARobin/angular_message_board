"use strict";

(function(){
  angular
  .module("comment")
  .directive("commentShow", commentShowFn);

  commentShowFn.$inject = ["Comment"];

  function commentShowFn(Comment){
    return {
      templateUrl: "js/comment/show.directive.html",
      link: function(scope, element, attributes){
        scope.comment = Comment.for(scope.grumble, scope.comment);
      }
    }
  }
})();
