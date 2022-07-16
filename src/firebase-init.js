// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0sv7YL8ke6-aJ5CyFCvJbaOMyH4gFEQw",
  authDomain: "independent-service-prov-d9ada.firebaseapp.com",
  projectId: "independent-service-prov-d9ada",
  storageBucket: "independent-service-prov-d9ada.appspot.com",
  messagingSenderId: "498687105428",
  appId: "1:498687105428:web:ed668a7d0b09f207175781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 export default auth;