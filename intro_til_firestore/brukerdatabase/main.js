firebase.initializeApp({
    apiKey: "AIzaSyCAdOBC_jvGeYRubbGtli4J12I35-jfgNU",
    authDomain: "minfoerstedb.firebaseapp.com",
    projectId: "minfoerstedb"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnE = document.querySelector(".navn");
var alderE = document.querySelector(".alder");
var epostE = document.querySelector(".epost");
var knappE = document.querySelector(".knapp");

knappE.addEventListener('click', function () {
    db.collection("brukere").add({
        navn: navnE.value,
        alder: alderE.value,
        epost: epostE.value
    });
    navnE.value = "";
    alderE.value = "";
    epostE.value = "";
});
