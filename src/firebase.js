import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDjrKEtsi0n8EzEKQCNErbGQGZj5bL6_04",
  authDomain: "assistify-f9861.firebaseapp.com",
  databaseURL: "https://assistify-f9861-default-rtdb.firebaseio.com",
  projectId: "assistify-f9861",
  storageBucket: "assistify-f9861.appspot.com",
  messagingSenderId: "478130939241",
  appId: "1:478130939241:web:fe02818ca2c4d9028bc9f8",
  measurementId: "G-TSRBP1LMHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)

