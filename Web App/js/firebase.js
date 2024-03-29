var fb = new Firebase("https://smart911.firebaseio.com");
var casesRef = fb.child("cases");
var operatorRef = fb.child("operators");
var autoID;
var operatorRef;
var currentCaseID;
var addCase = function() {
        casesRef.push({
            "id":-1,
            "operator":null,
            "EMT" : {
                "location":"",
                "text":""
            },
            "user" : {
                "imageURL" : "",
                "location" : "",
                "phone": ""
            }
        });  
}
var findCase = function(id) {
    casesRef.orderByChild("id").on("child_added", function(snapshot) {
        if(snapshot.val().id == id) {
            return snapshot.key();
        }
    });
}
function findLocation() {
    
    casesRef.orderByChild("id").on("child_added", function(snapshot) {
        if(snapshot.val().id == currentCaseID && !isOff) {
            //return snapshot.val().user.location;   
            return casesRef.child(snapshot.key()).child("user").location;  
        }
    });
}
function findLocation(id) {
    casesRef.once("value", function(snapshot) {
        var cases = snapshot.val()
        for (i in cases){
            if (cases[i].id == id){
                console.log(cases[i].user.location);
                break;
            }
        }
    });
    
}
function addOperator(number) {
    operatorRef.once("value", function(snap) {
        value = snap.val()
        count = false;
        for (var key in value){
            if(value[key].number == number)
            {
                count = true;
                break;
            }
        }
        
        if(!count) {
            operatorRef.push({
                "number":number,
                "case":-1,
                "online":true
            });
        }
    });
    
}
function operatorOffline(number) {
    operatorRef.once("value", function(snap) {
        value = snap.val()
        for (var key in value){
            if(value[key].number == number)
            {
                console.log("Signing in out " + number)
                operatorRef.child(snap.key()).update({
                    "online":false
                }); 
                break;
            }
        }
    });
    operatorOffcase(number);                 
    localStorage['phone'] = null;
}
function currCaseChange() {
    operatorRef.orderByChild("number").on("child_changed", function (s) {
        if(s.val().case != -1) {
            currentCaseID = s.val().case;
        }
    });
}
function operatorOffcase(number) {
    operatorRef.once("value", function(snap) {
        value = snap.val()
        for (var key in value){
            if(snap.val().number == number) {
                console.log("Off case " + snap.val().case)
                operatorRef.child(snap.key()).update({
                    "case":-1
                });  
            }
        }
    });
}
function operatorOnline(number) {
    operatorRef.once("value", function(snap) {
        value = snap.val()
        for (var key in value){
            if(snap.val().number == number) {
                operatorRef.child(snap.key()).update({
                    "online":true
                });  
            }
        }
    });
}
findLocation(0);
currCaseChange();