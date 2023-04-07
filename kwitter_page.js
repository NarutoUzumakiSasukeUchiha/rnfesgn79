//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCZa-mDwSLZXBOBbLn_8lj0PS87zF4ScMA",
    authDomain: "test-c0d88.firebaseapp.com",
    databaseURL: "https://test-c0d88-default-rtdb.firebaseio.com",
    projectId: "test-c0d88",
    storageBucket: "test-c0d88.appspot.com",
    messagingSenderId: "490270307152",
    appId: "1:490270307152:web:df8a7f148963b76a52f255",
    measurementId: "G-6T0VQYP0K5"
  };
  firebase.initializeApp(firebaseConfig)
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send()
  {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        Like:0
    })
    document.getElementById("msg").value = " "
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();