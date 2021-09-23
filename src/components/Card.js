import React from 'react';
import "../Style/Card.css";
import Collection from './Collection';
import cardBorder from '../images/cartes/Carte_Modele_Degats_ss_icones.png';
import uiHover from '../sounds/uiHover.mp3';
import {Howl} from 'howler';



const Card = ({name,type,image,mana,attack,HP,desc,effect, addToDeck, hoverSound}) => {
    // const Hover = uiHover;

    return (
        <div className="carte"  onMouseEnter={()=> hoverSound()} onClick={() => addToDeck(name)} style={{backgroundImage :`url(${image})`}}>
            <img className="carteBord" src={cardBorder} alt="Bord de carte"/>
            <div className="carteName">{name}</div>
            <div className="carteType">{type[0]}{type[1]}</div>
            <div className="carteMana">{mana}</div>
            <div className="carteAttack">{attack}</div>
            <div className="carteHP">{HP}</div>
            <div className="carteDesc">{desc}</div>
            <div className="carteEffect">{effect}</div>
        </div>
    )
}

export default Card;