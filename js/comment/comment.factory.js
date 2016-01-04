"use strict";

(function() {
  angular
  .module("comment")
  .factory("Comment", CommentFn);

  CommentFn.$inject = ["Firebase"];

  function CommentFn(Firebase){
    return{

    }
  }

})();
