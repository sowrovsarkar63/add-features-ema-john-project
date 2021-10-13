import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const InitializeFireBaseApp = () => {
    initializeApp(firebaseConfig);
};

export default InitializeFireBaseApp;
