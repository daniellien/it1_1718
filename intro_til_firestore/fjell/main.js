
firebase.initializeApp({
    apiKey: "AIzaSyDU1MCq-OVxf8RbZNGpE9RGym2aswm9oO4",
    authDomain: "firestore-b0aaf.firebaseapp.com",
    projectId: "firestore-b0aaf",
    storageBucket: "firestore-b0aaf.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {

    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on('state changed',
        function (),
        function (),
        function (){
            db.collection('fjell').add({
                Fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                Fjellbilde: uploadTask.snapshot.downloadURL
            });
        }

    );

    /*
    db.collection('fjell').add({
        Fjellnavn: fjellnavnInput.value,
        moh: mohInput.value*1,
        Fjellbilde: bildeInput.files[0].name

    });
*/

});





