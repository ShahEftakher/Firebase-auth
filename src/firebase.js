import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBQMcCZ5TDVS_NpktJcEZDe3NtygWoX0dQ",
  authDomain: "auth-app-development-18f9a.firebaseapp.com",
  projectId: "auth-app-development-18f9a",
  storageBucket: "auth-app-development-18f9a.appspot.com",
  messagingSenderId: "494072238366",
  appId: "1:494072238366:web:5346fc5d6f1cd70e97b90f",
});

const auth = app.auth();
export {auth};
export default app;