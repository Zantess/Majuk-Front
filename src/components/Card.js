import React from 'react';
import "../Style/Card.css"


const Card = ({name,type,image,mana,attack,HP,desc,effect}) => {


    return (
        <div className="carte"  style={{backgroundImage :`url(${image})`}}>
            <img className="carteBord" src="./images/cartes/Carte_Modele_Degats_ss_icones.png" alt="Bord de carte"/>
            <p className="carteName">{name}</p>
            <p className="carteType">{type}</p>
            <p className="carteMana">{mana}</p>
            <p className="carteAttack">{attack}</p>
            <p className="carteHP">{HP}</p>
            <p className="carteDesc">{desc}</p>
            <p className="carteEffect">{effect}</p>
        </div>
    )
}

export default Card;