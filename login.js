/**
 * Created by jp on 09-Jun-16.
 */
var a=angular.module("myApp",["loginctrl","firebase","ngMaterial", "ngMessages","ngRoute"])

a.config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"login.html"
    }).when("/chating",{


        templateUrl:"chating.html"
    })

})

