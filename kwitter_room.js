
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
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").childe(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem ("room_name", room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - ", Room_names);
row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
      
}