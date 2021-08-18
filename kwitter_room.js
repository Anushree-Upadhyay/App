

  var firebaseConfig = {
    apiKey: "AIzaSyCBbx1yJ8xpnFMECWL2BMowj5NrqAiigb4",
    authDomain: "project-39d53.firebaseapp.com",
    projectId: "project-39d53",
    storageBucket: "project-39d53.appspot.com",
    messagingSenderId: "884389201208",
    appId: "1:884389201208:web:0e35008ed8ae67916e2dcd"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
