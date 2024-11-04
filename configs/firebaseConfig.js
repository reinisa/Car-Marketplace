// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-app-37d86.firebaseapp.com",
  projectId: "car-marketplace-app-37d86",
  storageBucket: "car-marketplace-app-37d86.appspot.com",
  messagingSenderId: "146552263531",
  appId: "1:146552263531:web:f335141fbfc89e200a322e",
  measurementId: "G-5D6PRRL3S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);