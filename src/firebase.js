import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD10iK84pFeMRLHR1YhMBvQr1oD8DpnX7E",
    authDomain: "gulugulu-1302mj.firebaseapp.com",
    projectId: "gulugulu-1302mj",
    storageBucket: "gulugulu-1302mj.appspot.com",
    messagingSenderId: "586092575411",
    appId: "1:586092575411:web:706af7fcae267e21ae8ec6"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();

