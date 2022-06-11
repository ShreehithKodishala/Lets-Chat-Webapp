const firebaseConfig = {
    apiKey: "AIzaSyDnt59Ry44H7sx3iYd2kXnqp2Se0PWcq7Q",
    authDomain: "letschat-96e83.firebaseapp.com",
    databaseURL: "https://letschat-96e83-default-rtdb.firebaseio.com",
    projectId: "letschat-96e83",
    storageBucket: "letschat-96e83.appspot.com",
    messagingSenderId: "835934182759",
    appId: "1:835934182759:web:f06470d57b769e0f3463c2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("roomname", room_name);
      
      window.location = "Lets_chat_page.html";
  }

  function getData()
   {
         firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("room_name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomname", name);
    window.location = "Lets_chat_page.html";
}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("roomname");
    window.location = ("index.html");
}
