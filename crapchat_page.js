var firebaseConfig = {
    apiKey: "AIzaSyAMmTJRd1QyOihlREdKLbQ6HvJqK_SLgKA",
    authDomain: "crapchat-be80b.firebaseapp.com",
    databaseURL: "https://crapchat-be80b-default-rtdb.firebaseio.com",
    projectId: "crapchat-be80b",
    storageBucket: "crapchat-be80b.appspot.com",
    messagingSenderId: "630361954609",
    appId: "1:630361954609:web:f522a289e28e7af8b0f810"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name, message: msg, like: 0
    })
    document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
messagewithtag="<h4 class='message_h4'> " + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> likes: " + like + "</span></button><hr>";
row = namewithtag + messagewithtag + like_button + spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

