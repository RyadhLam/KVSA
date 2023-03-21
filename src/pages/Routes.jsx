import React from "react";
import Error from "./Error/PageIntrouvable";
import Layout from "../component/Layout";
import { Home, APropos, Logement } from ".";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Apropos" element={<APropos />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Logement/:id" element={<Logement />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Router;