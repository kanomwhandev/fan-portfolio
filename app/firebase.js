// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "firestore.googleapis.com",

  projectId: "fan-portfolio",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "876134747604",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
