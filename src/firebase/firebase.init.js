import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeFirebaseApp = () => {
    return initializeApp(firebaseConfig);
};

export default InitializeFirebaseApp;
