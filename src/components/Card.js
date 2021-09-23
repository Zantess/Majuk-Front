import React, { useState,useEffect } from 'react';
import "../Style/Card.css"

const Card = (props) => {

    // console.log(type);
    
    //console.log(props);
    console.log(props.state);
    
    const {name,type1,ssType,image,mana,attack,HP,desc,effect}  = props.state;

    return (
        <div className="carte"  style={{backgroundImage :`url(${image})`}}>
            <img className="carteBord" src="./images/cartes/Carte_Modele_Degats_ss_icones.png" alt="Bord de carte"/>
            <div className="carteName">{name}</div>
            <div className="carteType">{type1}-{ssType}</div>
            <div className="carteMana">{mana}</div>
            <div className="carteAttack">{attack}</div>
            <div className="carteHP">{HP}</div>
            <div className="carteDesc">{desc}</div>
            <div className="carteEffect">{effect}</div>
        </div>
    )
}

export default Card;