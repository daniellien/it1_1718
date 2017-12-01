
firebase.initializeApp({
    apiKey: "AIzaSyDtKMga8xtOxmVzXCKOFeqw0amNa6UR9IE",
    authDomain: "huskeliste-38b03.firebaseapp.com",
    projectId: "huskeliste-38b03"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector(".todo");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener('click', function () {
    db.collection("huskeliste").add({
        todo: todoE.value
    });
    todoE.value = "";
});

var ref = db.collection("huskeliste");

ref.onSnapshot(function(data){
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().todo + "</li>";
    }
});
