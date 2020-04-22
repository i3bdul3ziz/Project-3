import firebase from 'firebase/app'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYqBmLnPqRaKkaySQyRLZzHVzu6N-wRAU",
    authDomain: "waste-e300c.firebaseapp.com",
    databaseURL: "https://waste-e300c.firebaseio.com",
    projectId: "waste-e300c",
    storageBucket: "waste-e300c.appspot.com",
    messagingSenderId: "45352779679",
    appId: "1:45352779679:web:a873385560daa1d66987aa",
    measurementId: "G-QYTJ1R6Z24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const storage = firebase.storage()

  export  {
    storage, firebase as default
  }