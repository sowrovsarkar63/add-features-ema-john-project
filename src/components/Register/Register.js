import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Your email"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter Password"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                    />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
