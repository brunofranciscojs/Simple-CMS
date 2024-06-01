import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB8t-XV7-jS6YHJtLFMYlTdUKPT8nOSL1I",
    authDomain: "porfolio-d7832.firebaseapp.com",
    projectId: "porfolio-d7832",
    storageBucket: "porfolio-d7832.appspot.com",
    messagingSenderId: "40031144465",
    appId: "1:40031144465:web:a6de5e5f9526f909b3bfb0",
    measurementId: "G-8ZF4VFH3YN"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };

