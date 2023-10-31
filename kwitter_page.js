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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push
    ({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();