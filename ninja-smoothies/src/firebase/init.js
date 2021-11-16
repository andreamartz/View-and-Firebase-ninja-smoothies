// Import the functions you need from the SDKs you need
import firebase from "firebase";
import firestore from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2F4Ou51C6mmq2Uk_bza1ldU_Y_wL0K08",
  authDomain: "udemy-ninja-smoothies-4558b.firebaseapp.com",
  projectId: "udemy-ninja-smoothies-4558b",
  storageBucket: "udemy-ninja-smoothies-4558b.appspot.com",
  messagingSenderId: "270211577865",
  appId: "1:270211577865:web:cadadbf267b1fc4808e0d8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true }); // see last half of L223

// export firestore database
export default firebaseApp.firestore();
