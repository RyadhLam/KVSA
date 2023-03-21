import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../logo";

const Header = () => {
    return (
        <nav className="header">
            <Logo />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/APropos">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;