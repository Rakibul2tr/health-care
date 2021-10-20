import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const FirebaseInitialaz=()=>{
    initializeApp(firebaseConfig);
}

export default FirebaseInitialaz;