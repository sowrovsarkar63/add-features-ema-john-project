import React, { createContext } from "react";
import useFirebase from "../useFirebase";

export const AuthContext = createContext();
const AutheProvider = ({ children }) => {
    const allContext = useFirebase();
    // const { children } = props;destructure code
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutheProvider;
