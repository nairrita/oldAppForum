import firebase from 'firebase'
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBgO8VpDP0vDcc_bh85pH7ElRrckwvDMck",
  authDomain: "officialprocedureapp.firebaseapp.com",
  databaseURL: "https://officialprocedureapp.firebaseio.com",
  projectId: "officialprocedureapp",
  storageBucket: "officialprocedureapp.appspot.com",
  messagingSenderId: "916976747467",
  appId: "1:916976747467:web:a778abf658ce87204b6c4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();