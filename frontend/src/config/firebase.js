// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9Pbo-aV0Mwh2KOxOZuS8V_1bVpK-Pw4",
  authDomain: "my-doc-view-project.firebaseapp.com",
  projectId: "my-doc-view-project",
  storageBucket: "my-doc-view-project.appspot.com",
  messagingSenderId: "368153821554",
  appId: "1:368153821554:web:5c87fa786fa49bf9d95deb",
  measurementId: "G-7QRFQZ7B9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };