import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;
            console.log(user);
        });
    };
    // logout
    const logoutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
            }
        });
    }, []);

    return {
        user,
        SignInWithGoogle,
        logoutUser,
    };
};
export default useFirebase;
