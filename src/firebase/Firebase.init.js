// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6Muv3lQJjkX6Xi5F74dmU2ZgLfIRKstQ",
    authDomain: "arabic-hotel.firebaseapp.com",
    projectId: "arabic-hotel",
    storageBucket: "arabic-hotel.appspot.com",
    messagingSenderId: "159886789602",
    appId: "1:159886789602:web:2fa0427df649dda43b47bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;