firebase.initializeApp({
    apiKey: "AIzaSyDU1MCq-OVxf8RbZNGpE9RGym2aswm9oO4",
    authDomain: "firestore-b0aaf.firebaseapp.com",
    projectId: "firestore-b0aaf"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection('kontaktskjema').add({
    navn: 'Arnt Inge',
    etternavn: 'Sørvårull',
    telefonnummer: 41765231,
    epost: 'arnt.vårull@indianspecies.in'
});
