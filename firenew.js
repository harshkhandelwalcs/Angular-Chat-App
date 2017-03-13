/**
 * Created by jp on 30-Jun-16.
 */
var a=angular.module("MyApp",['firebase'])

a.controller("firebaseCtrl",function($scope,$firebaseObject){
    var ref=firebase().database().ref();
    $scope.name = "ABC";


    $firebaseObject(ref).$bindTo($scope,"name");


    var auth = $firebaseAuth();

    auth.$signInWithPopup("google").then(function(result){
        console.log(result);
    },function(err){
        console.log("err");
    })

    })




