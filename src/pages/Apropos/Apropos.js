import React from "react";
import "../../pages/Apropos/apropos.css";
import apropos from "../../images/apropos.png";
import MenuDeroulant from "../../component/MenuDeroulant";

let menu = `apropos__menu`;
let header = `apropos__header`;
let paragraphe = `apropos__text`;

let titre1 = `Fiabilité`;
let detail1 = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les
photos sont conformes aux logements, et toutes les informations sont
régulièrement vérifiées par nos équipes.`;

let titre2 = `Respect`;
let detail2 = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
comportement discriminatoire ou de perturbation du voisinage
entraînera une exclusion de notre plateforme.`;

let titre3 = `Service`;
let detail3 = `Nos équipes se tiennent à votre disposition pour vous fournir une
expérience parfaite. N'hésitez pas à nous contacter si vous avez la
moindre question.`;

let titre4 = `Sécurité`;
let detail4 = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
pour les voyageurs, chaque logement correspond aux critères de
sécurité établis par nos services. En laissant une note aussi bien à
l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
les standards sont bien respectés. Nous organisons également des
ateliers sur la sécurité domestique pour nos hôtes.`;

const APropos = () => {
    return (
        <div className="apropos">
            <img
                className="apropos__img"
                src={`${apropos}`}
                alt="illustration"
            />
            <MenuDeroulant
                menu={`${menu}`}
                titre={`${titre1}`}
                texte={`${detail1}`}
                header={`${header}`}
                paragraphe={`${paragraphe}`}
            />
            <MenuDeroulant
                menu={`${menu}`}
                titre={`${titre2}`}
                texte={`${detail2}`}
                header={`${header}`}
                paragraphe={`${paragraphe}`}
            />
            <MenuDeroulant
                menu={`${menu}`}
                titre={`${titre3}`}
                texte={`${detail3}`}
                header={`${header}`}
                paragraphe={`${paragraphe}`}
            />
            <MenuDeroulant
                menu={`${menu}`}
                titre={`${titre4}`}
                texte={`${detail4}`}
                header={`${header}`}
                paragraphe={`${paragraphe}`}
            />
        </div>
    );
};

export default APropos;