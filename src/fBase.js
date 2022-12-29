import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvSblXkRXh7DGeMkecu4KvnZtJ1zTo0-A",
    authDomain: "picturethat-96d33.firebaseapp.com",
    projectId: "picturethat-96d33",
    storageBucket: "picturethat-96d33.appspot.com",
    messagingSenderId: "932270408979",
    appId: "1:932270408979:web:2cfd1c7564526cf53bc6e6",
    measurementId: "G-FG7DW28K86"
  };

initializeApp(firebaseConfig);

export const dbService = getFirestore();