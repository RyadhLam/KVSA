import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="PageIntrouvable">
            <h1>404</h1>
            <h4>Oups ! La page que vous demandez n'existe pas.</h4>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;