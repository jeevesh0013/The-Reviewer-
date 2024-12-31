// Import required Firebase functions from SDKs
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  updateProfile 
} from 'firebase/auth';

import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDoc, 
  setDoc, 
  doc, 
  getDocs 
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

// Firebase config for your web app
const firebaseConfig = {
  apiKey: "AIzaSyBD5uVlGaEDFZTHrdGInIvw6C2I6Fonmr4",
  authDomain: "moviereviewapp-7e0af.firebaseapp.com",
  projectId: "moviereviewapp-7e0af",
  storageBucket: "moviereviewapp-7e0af.firebasestorage.app",
  messagingSenderId: "295427724676",
  appId: "1:295427724676:web:19de2a69ba546a19b479d1",
  measurementId: "G-50HWC6LL0D"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Export Firebase functions for use in other parts of your app
export { 
  app, db, getFirestore, collection, addDoc, getDoc, setDoc, doc, getDocs,
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile
};
