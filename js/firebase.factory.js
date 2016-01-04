"use strict";

(function(){
  angular
  .module("messageBoard")
  .factory("$firebase", $firebaseFn);

  $firebaseFn.$inject = ["$firebaseObject", "$firebaseArray"];

  function $firebaseFn($firebaseObject, $firebaseArray){
    function Factory(urlExtension, methodsToAdd){
      var ref = new Firebase(firebaseURL + urlExtension);
      this.methodsToAdd = methodsToAdd;
      return $firebaseArray.call(this, ref);
    }
    Factory.prototype.new = function(input){
      var clazz = this, instance = input || {};
      instance.vm = {
        instance: instance
      };
      instance.vm.destroy = function(callback){
        return clazz.$remove(instance).then(function(){
          if(callback) callback(instance);
        });
      }
      // Sneaky way of not having to have both `create` and `save` functions
      instance.vm.save = function(callback){
        var doWhat = (instance.$id ? "$save" : "$add");
        instance.vm = null;
        // Can't pass functions to Firebase
        return clazz[doWhat](instance).then(function(ref){
          instance = clazz.new(instance.$id ? instance : clazz.$getRecord(ref.key()));
          if(callback) callback(instance);
        });
      }
      instance.vm.toggleForm = function(){
        instance.vm.activeForm = (!instance.vm.activeForm);
      }
      if(clazz.methodsToAdd) angular.extend(instance.vm, clazz.methodsToAdd);
      return instance;
    }
    Factory.prototype.all = function(){
      var clazz = this;
      clazz.$list.forEach(function(instance){
        instance = clazz.new(instance);
      });
      return clazz.$list;
    }
    Factory.prototype.find = function(id, callback){
      var clazz = this;
      return clazz.$getRecord(id).then(function(record){
        if(callback) callback(clazz.new(record));
      });
    }
    return $firebaseArray.$extend(Factory);
  }
})();
