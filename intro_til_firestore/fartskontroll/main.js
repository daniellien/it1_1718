
firebase.initializeApp({
    apiKey: "AIzaSyDU1MCq-OVxf8RbZNGpE9RGym2aswm9oO4",
    authDomain: "firestore-b0aaf.firebaseapp.com",
    projectId: "firestore-b0aaf"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var driverInput = document.querySelector('.driver');
var regnrInput = document.querySelector('.regnr');
var hastighetInput = document.querySelector('.speed');
var registerE = document.querySelector('.register');
var knappE = document.querySelector('.send');

knappE.addEventListener('click', function () {
    db.collection('fartskontroll').add({
        Driver: driverInput.value,
        Registreringsnummer: regnrInput.value,
        Hastighet: hastighetInput.value*1
    });
    driverInput.value = "";
    regnrInput.value = "";
    hastighetInput.value = "";
});

var mappe = db.collection('fartskontroll').orderBy('Hastighet', 'desc');

mappe.onSnapshot(function(data){
    registerE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        registerE.innerHTML +=
            "<tr>" + "<td>" + dokument[x].data().Driver
            + "</td>" + "<td>" + dokument[x].data().Registreringsnummer
            + "</td>" + "<td>" + dokument[x].data().Hastighet + " km/t" + "</td>" + "</tr>";
    }
});