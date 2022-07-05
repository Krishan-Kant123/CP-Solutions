import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBUbMMMOsztaWz8gIeRXol4-CJBX19UJ64",
  authDomain: "codechef-codeforces-leetcode.firebaseapp.com",
  projectId: "codechef-codeforces-leetcode",
  storageBucket: "codechef-codeforces-leetcode.appspot.com",
  messagingSenderId: "351205238715",
  appId: "1:351205238715:web:1d9c7e96a64ef3f6c6069e",
  measurementId: "G-GSRZSWQMCJ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
