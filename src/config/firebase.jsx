import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa8NikXIZI2pnpB-r4rWaZJsJcSMSfwMQ",
  authDomain: "mukam-firebase.firebaseapp.com",
  projectId: "mukam-firebase",
  storageBucket: "mukam-firebase.appspot.com",
  messagingSenderId: "739887115376",
  appId: "1:739887115376:web:f2f2f7a2e647484a42d8b5",
  measurementId: "G-X3NZZ8N63M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
