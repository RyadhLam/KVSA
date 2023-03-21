import React from "react";
import "./Home.css";
import getApi from "../../component/api/getApi";
import { Link } from "react-router-dom";
import header from "../../images/header.png";

let logements = getApi();

const Home = () => {
    return (
        <>
            <div className="Body__header">
                <img src={`${header}`} alt="header" />
                <h1 className="large">Chez vous, partout et ailleurs</h1>
                <h1 className="small">
                    Chez vous, <br />
                    partout et ailleurs
                </h1>
            </div>
            <section className="Body__CarteLogement">
                <ul>
                    {logements.map((logement) => (
                        <Link key={logement.id} to={`/logement/${logement.id}`}>
                            <li
                                className="carte"
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                                    url(${logement.cover})`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <p>{logement.title}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Home;