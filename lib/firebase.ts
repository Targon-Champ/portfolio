// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgx9rtWQeELZRli6PQ-tbC-EKQ46fDm0o",
  authDomain: "portfolio-4d70d.firebaseapp.com",
  projectId: "portfolio-4d70d",
  storageBucket: "portfolio-4d70d.firebasestorage.app",
  messagingSenderId: "308478881028",
  appId: "1:308478881028:web:eb510ffadfac22dbd7b451",
  measurementId: "G-WKM7CBEL2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);