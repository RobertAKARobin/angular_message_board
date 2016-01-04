"use strict";

var firebaseURL = "https://wdidc.firebaseio.com/";

(function(){
  var scripts = {
    "js/": [
      "app.module",
      "firebase.factory"
    ],
    "js/topic/": [
      "topic.module",
      "topic.factory",
      "index.controller",
      "save.directive",
      "show.directive",
      "header.directive"
    ],
    "js/comment/": [
      "comment.module",
      "comment.factory",
      "save.directive",
      "show.directive"
    ]
  };
  loadScripts();
  angular.element(document.head).ready(function(){
    angular.bootstrap(document, ["messageBoard"]);
  });

  function loadScripts(){
    var prefix, head = document.head;
    for(prefix in scripts){
      var suffixes = scripts[prefix];
      suffixes.forEach(function(suffix){
        var el = document.createElement("SCRIPT");
        el.src = prefix + suffix + ".js";
        head.appendChild(el);
      });
    }
  }
})();
