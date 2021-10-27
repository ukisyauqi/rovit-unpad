import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmRClXB1eJIpsPhklqMHdHSS8tM93AP60",
  authDomain: "robot-covid.firebaseapp.com",
  projectId: "robot-covid",
  storageBucket: "robot-covid.appspot.com",
  messagingSenderId: "854774066591",
  appId: "1:854774066591:web:cb28f3ad062c61a2a9e1aa"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire