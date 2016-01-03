"use strict";

(function() {
  angular
  .module("comment")
  .factory("Comment", CommentFn);

  CommentFn.$inject = ["Firebase"];

  function CommentFn(Firebase){
    var factory = this;
    factory.for = function(grumble, comment){
      if(!comment) comment = {}
      var methods = {
        $create: create,
        $destroy: destroy
      }
      return angular.extend(comment, methods);

      function create(){
        if(!grumble.comments) grumble.comments = [];
        grumble.comments.push(this);
        return Firebase.update(grumble);
      }
      function destroy(){
        grumble.comments.splice(grumble.comments.indexOf(this), 1);
        return Firebase.update(grumble);
        // grumble.child("comments").$remove(this)
      }
    }
    return factory
  }

})();
