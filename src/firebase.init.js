// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0dPQ2QWjWfnX5ZNW768QmnqI7cy0Gm9s",
    authDomain: "ema-john-simple-1e593.firebaseapp.com",
    projectId: "ema-john-simple-1e593",
    storageBucket: "ema-john-simple-1e593.appspot.com",
    messagingSenderId: "981792422740",
    appId: "1:981792422740:web:649b22d63f549c02c526c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth)
