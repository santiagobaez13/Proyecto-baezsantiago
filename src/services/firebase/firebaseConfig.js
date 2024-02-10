import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyB0ult1KmuSGB7oB2X2PzbE7iIYG7O8lBU",
    authDomain: "ecommerce-34352.firebaseapp.com",
    projectId: "ecommerce-34352",
    storageBucket: "ecommerce-34352.appspot.com",
    messagingSenderId: "411451171451",
    appId: "1:411451171451:web:f2770effadedf923a8b8de",
    measurementId: "G-VCBVDLNLBS"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
