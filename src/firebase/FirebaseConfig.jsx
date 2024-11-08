import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnFiYXZ4jw--uyVOwHKbHfM8hcZJV0lgo",
  authDomain: "e-commerce-3e894.firebaseapp.com",
  projectId: "e-commerce-3e894",
  storageBucket: "e-commerce-3e894.appspot.com",
  messagingSenderId: "32220258975",
  appId: "1:32220258975:web:95baf7625da432cb3eb8aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { auth, fireDB,googleProvider }