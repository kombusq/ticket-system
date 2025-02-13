// src/firebase/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5x4NByEI6IBh1pDX-BYc7s3VcCgosMyQ",
  authDomain: "ticket-system-442de.firebaseapp.com",
  projectId: "ticket-system-442de",
  storageBucket: "ticket-system-442de.firebasestorage.app",
  messagingSenderId: "580016137624",
  appId: "1:580016137624:web:a91db0527140a02f3eb7ed",
  measurementId: "G-9HBGTFN195"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
