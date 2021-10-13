import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { SignInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || "/shop";

    const handleGoogleLogin = () => {
        SignInWithGoogle().then((result) => {
            history.push(redirectUri);
        });
    };

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="You password"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    New To Ema-john <Link to="/register">Create Account</Link>
                </p>
                <div>--------or-----------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">
                    Google SignIn
                </button>
            </div>
        </div>
    );
};

export default Login;
