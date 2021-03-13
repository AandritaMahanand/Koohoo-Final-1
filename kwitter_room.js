  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyB5cE6ewaxak_FIdb5xPVy54y3YRRv1Bg8",
      authDomain: "koohoo-a07b2.firebaseapp.com",
      databaseURL: "https://koohoo-a07b2-default-rtdb.firebaseio.com",
      projectId: "koohoo-a07b2",
      storageBucket: "koohoo-a07b2.appspot.com",
      messagingSenderId: "594849583248",
      appId: "1:594849583248:web:f16ce9b96ee4e09bfdc815",
      measurementId: "G-0JRQW8RZWL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("user_name")
  console.log(userName)
  document.getElementById("user_name").innerHTML = "Welcome " + userName + "! 😀😀😀"

  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log(Room_names)
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row

              //End code
          });
      });
  }
  getData();

  function addRoom() {
      RoomNAME = document.getElementById("room_name").value
      firebase.database().ref("/").child(RoomNAME).update({
          purpose: "adding room name"
      })
      localStorage.setItem("room_name", RoomNAME)
      window.location = "kwitter_page.html"
  }

  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }

  function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
  }