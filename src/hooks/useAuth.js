import { useContext } from "react";
import { AuthContext } from "../components/context/AutheProvider";

const useAuth = () => {
    return useContext(AuthContext);
};
export default useAuth;
