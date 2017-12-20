firebase.initializeApp({
    apiKey: "AIzaSyDU1MCq-OVxf8RbZNGpE9RGym2aswm9oO4",
    authDomain: "firestore-b0aaf.firebaseapp.com",
    databaseURL: "https://firestore-b0aaf.firebaseio.com",
    projectId: "firestore-b0aaf",
    storageBucket: "firestore-b0aaf.appspot.com",
    messagingSenderId: "667742455331"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

/* Legge til 24 luker
for(var lukenummer = 1; lukenummer<=24; lukenummer++){

    db.collection('julekalender').add({
        luke: lukenummer
    });

}
*/

var pakkerE = document.querySelector('.pakker');

var ref = db.collection('julekalender').orderBy('luke');

ref.onSnapshot(function (data) {

    var objekt = data.docs;
    for (var x in objekt){

        pakkerE.innerHTML+=         "<div class='luke'>" +
                                        objekt[x].data().luke +
                                    "</div>";
    }

});