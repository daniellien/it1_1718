
firebase.initializeApp({
    apiKey: "AIzaSyCAdOBC_jvGeYRubbGtli4J12I35-jfgNU",
    authDomain: "minfoerstedb.firebaseapp.com",
    projectId: "minfoerstedb"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector(".tittel");
var tekstE = document.querySelector(".tekst");
var knappE = document.querySelector(".knapp");

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});

