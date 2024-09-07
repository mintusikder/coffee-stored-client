// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi2iTeFI8cy21BCIvE2wmWP5JsDNxOLJ8",
  authDomain: "coffee-store-7b307.firebaseapp.com",
  projectId: "coffee-store-7b307",
  storageBucket: "coffee-store-7b307.appspot.com",
  messagingSenderId: "402491838716",
  appId: "1:402491838716:web:6dfb0f6e547583ef9f8779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app