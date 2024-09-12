// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDP2zFtY0HVhUjwgc0zwOfUuVH0IF3B2r4',
  authDomain: 'simsalabim-f2960.firebaseapp.com',
  projectId: 'simsalabim-f2960',
  storageBucket: 'simsalabim-f2960.appspot.com',
  messagingSenderId: '780595080331',
  appId: '1:780595080331:web:b0b678f26562dce7a5388e',
  measurementId: 'G-TGFC8TWN6W',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
