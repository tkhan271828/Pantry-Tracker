import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDL4fhmJPMx_78TBmHP4eEZ6CRhBTDSALY",
 authDomain: "pantry-tracker-f5ea4.firebaseapp.com",
 projectId: "pantry-tracker-f5ea4",
 storageBucket: "pantry-tracker-f5ea4.appspot.com",
 messagingSenderId: "414541207045",
 appId: "1:414541207045:web:6eb222c4a21d20833f2e6c"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore };