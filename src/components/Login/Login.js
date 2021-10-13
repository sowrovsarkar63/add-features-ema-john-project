import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
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
                <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;
