// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJBDeGM8ydliGFwsdocXNiDm_PLANUQI",
  authDomain: "react-study-group-v3-forms.firebaseapp.com",
  databaseURL: "https://react-study-group-v3-forms-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-study-group-v3-forms",
  storageBucket: "react-study-group-v3-forms.appspot.com",
  messagingSenderId: "573177544062",
  appId: "1:573177544062:web:755e4dc3d627c3e138072f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
