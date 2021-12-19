import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL,uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSuGx3hmlC378P-BeXDScCT1oDmkOfKmI",
  authDomain: "portfolio-9e9d7.firebaseapp.com",
  databaseURL: "https://portfolio-9e9d7-default-rtdb.firebaseio.com",
  projectId: "portfolio-9e9d7",
  storageBucket: "portfolio-9e9d7.appspot.com",
  messagingSenderId: "728130567389",
  appId: "1:728130567389:web:b102276cb2643d7fc96f34",
  measurementId: "G-M24FDKWKZR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export {
  app,
  db,
  auth,
  storage,
  ref,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  addDoc,
  signOut,
  doc,
  updateDoc,
  collection,
  getDoc,
  updatePassword,
  sendPasswordResetEmail,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable
};
