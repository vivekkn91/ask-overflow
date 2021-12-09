import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB0ktWLQzdiaCikCyQ16NWxcZSifGji-_Q",
  // authDomain: "askover.firebaseapp.com",
  authDomain: "wixten.com",
  projectId: "askover",
  storageBucket: "askover.appspot.com",
  messagingSenderId: "50529572214",
  appId: "1:50529572214:web:9f37c3a7c4cfe995119657",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export { firebase };
