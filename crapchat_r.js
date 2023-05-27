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
 document.getElementById("user").innerHTML="Welcome "+ user_name + "!!! :)";
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
document.getElementById("user_name").innerHTML;
function addroom(){
  window.location.replace("crapchat_page.html");
}
