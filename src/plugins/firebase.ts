// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: (import.meta as ImportMeta & { env: { VITE_FIREBASE_KEY: string } }).env.VITE_FIREBASE_KEY,
  authDomain: 'geo-mud-report.firebaseapp.com',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://geo-mud-report-default-rtdb.firebaseio.com',
  projectId: 'geo-mud-report',
  storageBucket: 'geo-mud-report.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: '1:57095706658:web:be8801c483ac26dcebd27b',
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: 'G-5XLSZLQ4SS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
// get a reference to the service
const citiesRef = ref(db, 'cities');

export { auth, citiesRef, analytics };
