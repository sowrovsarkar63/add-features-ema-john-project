import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = (props) => {
    const children = props.children;

    const { user } = useAuth();
    return (
        <Route>
            {...props}
            render=
            {({ location }) =>
                user.displayName ? children : <Redirect to="/login"></Redirect>
            }
        </Route>
    );
};

export default PrivateRoute;
