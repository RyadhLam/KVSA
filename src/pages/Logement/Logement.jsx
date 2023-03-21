import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getApi from "../../component/api/getApi";
import FicheLogement from "./FicheLogement";
import "./Logement.css";

let logements = getApi();

const Logement = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        // verification si l'id est bien dans l'api sinon 404
        if (
            !logements.some((logements) => {
                return logements.id === id;
            })
        ) {
            navigate("/PageIntrouvable");
        }
    });

    return (
        <>
            <FicheLogement />
        </>
    );
};

export default Logement;