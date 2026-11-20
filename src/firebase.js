import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAQK_NucWDPX18tanorXof_nT-B7hO544",
  authDomain: "auth-app-b0b31.firebaseapp.com",
  projectId: "auth-app-b0b31",
  storageBucket: "auth-app-b0b31.firebasestorage.app",
  messagingSenderId: "413721576654",
  appId: "1:413721576654:web:8457af17d0396652b2fc9f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
