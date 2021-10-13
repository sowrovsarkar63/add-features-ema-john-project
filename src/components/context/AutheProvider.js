import React, { createContext } from "react";
import useFirebase from "../useFirebase";

const AutheProvider = (props) => {
    const { children } = props;
    const AuthContext = createContext();
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutheProvider;
