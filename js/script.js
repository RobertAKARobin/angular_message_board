"use strict";

var firebaseURL = "https://wdidc.firebaseio.com/";

(function(){
  var scripts = {
    "js/": [
      "app.module",
      "firebase.factory"
    ],
    "js/grumble/": [
      "grumble.module",
      "grumble.factory",
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
    angular.bootstrap(document, ["grumblr"]);
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
