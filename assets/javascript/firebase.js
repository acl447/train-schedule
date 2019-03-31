
 // Initialize Firebase
 var config = {
  apiKey: keyHolder.myKey,
  authDomain: "train-scheduler-faba1.firebaseapp.com",
  databaseURL: "https://train-scheduler-faba1.firebaseio.com",
  projectId: "train-scheduler-faba1",
  storageBucket: "",
  messagingSenderId: "438469791969"
};
firebase.initializeApp(config);

  var database = firebase.database();
