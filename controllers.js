/**
 * Created by jp on 19-Jun-16.
 */
var a=angular.module("loginctrl",[])

a.controller("loginctrl",function($scope,$firebaseAuth,$firebaseArray,$location,aa) {
        var ref = new Firebase("https://hkchat.firebaseio.com/users");
        var  users=$firebaseArray(ref);

        $scope.glogin=function(){
            var auth = $firebaseAuth(ref);
            console.log(auth);
            auth.$authWithOAuthPopup("google").then(function (authData) {
            console.log("Logged in as:", authData.uid);
            console.log(authData);
               // $scope.uid=authData.uid;
                $scope.user={uid : authData.uid,
                    name:authData.google.displayName,
                    image:authData.google.profileImageURL
                }
                aa.data=$scope.user;
            users.$add($scope.user);
            $location.path("/chating");
            }).catch(function (error) {
            console.log("Authenticatioen failed:", error);
            })
        }
})

a.controller("chatingctrl",function($scope,aa,$firebaseArray,$firebaseAuth) {
            $scope.uid=aa.data.uid;
            $scope.image=aa.data.image;
            $scope.name=aa.data.name;
    var ref1 = new Firebase("https://hkchat.firebaseio.com/chats");
    var chats=$firebaseArray(ref1);

    $scope.send=function(){
        $scope.msg = document.getElementById('myTextArea').value
                aa.messages.push($scope.msg);

               chats.$add({msg:$scope.msg,id:$scope.uid,name:$scope.name})
                $scope.message=aa.messages
        console.log(aa.chat);

                console.log(aa.messages);
                document.getElementById('myTextArea').value=''

    }
    console.log(chats[0]);

            //$scope.send1 = function(e) {
            //    if (e.keycode==13 || e.which == 13) {
            //        e.preventDefault();
            //        $scope.msg = document.getElementById('myTextArea').value
            //        aa.messages.push($scope.msg);
            //
            //        chats.$add({msg:$scope.msg,id:$scope.uid,name:$scope.name}).then(function(){
            //
            //        })
            //        $scope.message=aa.messages
            //        console.log(aa.messages);
            //        document.getElementById('myTextArea').value=''
            //    }
            //    console.log(chats[0])
            //}
})

a.service("aa",function(){

    this.data={};
    this.messages=[];
this.chats=[];

})