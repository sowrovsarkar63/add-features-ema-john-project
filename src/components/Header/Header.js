import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    const { user, logoutUser } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.displayName || user.email ? (
                    <NavLink to="/">Hello {user.displayName}</NavLink>
                ) : (
                    ""
                )}
                {user.displayName || user.email ? (
                    <button onClick={logoutUser}>Logout</button>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </nav>
        </div>
    );
};

export default Header;
