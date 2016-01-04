"use strict";

(function() {
  angular
  .module("topic")
  .factory("Topic", TopicFn);

  TopicFn.$inject = ["$firebase"];

  function TopicFn($firebase){
    var Topic = new $firebase("topics");
    return Topic;
  }
})();
