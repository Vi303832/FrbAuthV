
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAySwqifxjNAHbPfbSexuXV27YZ5y9XpCw",
    authDomain: "expense-track-ea788.firebaseapp.com",
    projectId: "expense-track-ea788",
    storageBucket: "expense-track-ea788.firebasestorage.app",
    messagingSenderId: "271014106895",
    appId: "1:271014106895:web:4794bc9fcacd6d4475907a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);