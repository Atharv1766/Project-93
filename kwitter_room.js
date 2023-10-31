var firebaseConfig =
    {
    apiKey: "AIzaSyBSWAp8cqvb_zuJlhx1HeTzk6cV4nmaP7w",
    authDomain: "kwitter-app-c74d0.firebaseapp.com",
    databaseURL: "https://kwitter-app-c74d0-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-c74d0",
    storageBucket: "kwitter-app-c74d0.appspot.com",
    messagingSenderId: "32429890129",
    appId: "1:32429890129:web:08a6e835e7cbff93e93670"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
