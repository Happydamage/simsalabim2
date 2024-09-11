// Required for side effects
import 'firebase/firestore';

import { createTheme, ThemeProvider } from '@mui/material';
import { AppRouter } from './app/router/AppRouter.tsx';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDP2zFtY0HVhUjwgc0zwOfUuVH0IF3B2r4',
  authDomain: 'simsalabim-f2960.firebaseapp.com',
  projectId: 'simsalabim-f2960',
  storageBucket: 'simsalabim-f2960.appspot.com',
  messagingSenderId: '780595080331',
  appId: '1:780595080331:web:b0b678f26562dce7a5388e',
  measurementId: 'G-TGFC8TWN6W',
};
const theme = createTheme({});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
