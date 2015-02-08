var fb = new Firebase("https://smart911.firebaseio.com");
var casesRef = fb.child("cases");
var operatorRef = fb.child("operators");
var autoID;
var operatorRef;
var currentCaseID;
var addCase = function() {
    fb.orderByKey().equalTo("autoID").on("child_added", function(snapshot) {
        var autoID = snapshot.val();
        casesRef.push({
            "id":autoID,
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
        fb.update({
            "autoID":(autoID+1)
        });
    });  
}
var findCase = function(id) {
    casesRef.orderByChild("id").on("child_added", function(snapshot) {
        if(snapshot.val().id == id) {
            console.log(snapshot.key());       
        }
    });
}
function parseKey(key) {

}
function addOperator(number) {
    operatorRef.push({
        "number":number,
        "case":-1,
        "online":false
    });     
}
function operatorOnline(number) {
    operatorRef.orderByChild("number").on("child_added", function(snap) {
        if(snap.val().number == number) {
            operatorRef.child(snap.key()).update({
                "online":true
            });  
        }
    });
}
function addOperatorToCase(caseid) {
    operatorRef.orderByChild("case").on("child_added", function(snap) {
        console.log(snap.val());
        if(snap.val().case == -1 && snap.val().online == true) {
            operatorRef.child(snap.key()).update({"case":caseid});    
            console.log(snap.key());
        }
    });
};