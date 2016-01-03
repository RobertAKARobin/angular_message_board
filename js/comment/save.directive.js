"use strict";

(function(){
  angular
  .module("comment")
  .directive("commentSave", commentSaveFn);

  commentSaveFn.$inject = ["Comment"];

  function commentSaveFn(Comment){
    return {
      templateUrl: "js/comment/save.html",
      link: function(scope, element, attributes){
        scope.comment = Comment.for(scope.grumble);
      }
    }
  }
})();
