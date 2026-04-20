// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAyJnqqrjJbHuV5k5ojfhWQ9B4heSzz2aE",

  authDomain: "reactfirebasesimpleexample.firebaseapp.com",

  databaseURL: "https://reactfirebasesimpleexample-default-rtdb.firebaseio.com",

  projectId: "reactfirebasesimpleexample",

  storageBucket: "reactfirebasesimpleexample.firebasestorage.app",

  messagingSenderId: "27681807510",
  
  appId: "1:27681807510:web:723c45c48a9a18affa76b7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;