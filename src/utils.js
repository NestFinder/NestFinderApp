(function(){
    "use strict";
    var Vue = require("vue");
    var Utils= function(){

    };

    Utils.prototype = {

        bindCordovaEvents : function(){

            Vue.cordova.on('deviceready', () => {
                console.log("deviceready");

                Vue.cordova.on('pause', () => {
                    console.log("pause");
                });
                Vue.cordova.on('online', () => {
                    console.log("online");
                });
                Vue.cordova.on('offline', () => {
                    console.log("offline");
                });
                Vue.cordova.on('resume', () => {
                    console.log("resume");
                });
                Vue.cordova.on('backbutton', () => {
                    console.log("backbutton");
                    var routeHash = window.location.hash;
                    if(routeHash == "#/firstpage" ||routeHash == "#/listaproperty" ||routeHash == "#/morepropertydetail" ){
                        console.log(Vue);
                        window.history.back();
                    }else {
                        navigator.app.exitApp();
                    }
                });

            });

        },
        removeBase64MimeText : function(text){
            return (text.replace(new RegExp("data:(.*)base64,","g") , ""));
        },
        googleApiKey : function () {
            return "AIzaSyDLDeKP8jWsqYX5X0uA0kcABV2gXgejXXA";
        }

    };

    module.exports = function(){
        return  (new Utils());
    }();

})();