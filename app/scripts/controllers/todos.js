'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTodoApp
 */
app.controller('todoCtrl',['$resource', 'todoFact', function ($resource,todoFact) {

 // this.todos = todoFact.query();

    this.todos =  JSON.parse(localStorage.getItem("todos"));

    this.add = function(){
        if(this.user && this.user.length<64 ){
          var existingEntries = JSON.parse(localStorage.getItem("todos"));
          var allEntries = [];
          for(var i = 0;i< existingEntries.length;i++)
              allEntries.push(existingEntries[i]);

          allEntries.push(this.user);
          localStorage.setItem("todos", JSON.stringify(allEntries));

          this.todos = JSON.parse(localStorage.getItem("todos"));
          this.user = "";
        }else{
          alert("Input must be between 0 and 64 characters long.");
        }
    }

    this.delete = function(id){

        var existingEntries = JSON.parse(localStorage.getItem("todos"));

        var allEntries = [];
        for(var i = 0;i< existingEntries.length;i++)
            allEntries.push(existingEntries[i]);

        allEntries.splice(id,1);
        localStorage.setItem("todos", JSON.stringify(allEntries));

        this.todos = JSON.parse(localStorage.getItem("todos"));
    }

    this.edit = function(id, val){
        if(this.user && this.user.length<64 ){
          var existingEntries = JSON.parse(localStorage.getItem("todos"));

          var allEntries = [];
          for(var i = 0;i< existingEntries.length;i++)
              allEntries.push(existingEntries[i]);

          allEntries[id] = val;
          localStorage.setItem("todos", JSON.stringify(allEntries));
          this.todos = JSON.parse(localStorage.getItem("todos"));
        }else{
          alert("Input must be between 0 and 64 characters long.");
        }
    }

    this.deleteAll = function(){
        var allEntries = [];
        localStorage.setItem("todos", JSON.stringify(allEntries));
        this.todos = JSON.parse(localStorage.getItem("todos"));
    }


  }]);
