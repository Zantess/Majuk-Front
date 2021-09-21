import React from 'react';
import "../Style/Card.css"


const Card = ({name,type,image,mana,attack,HP,desc,effect}) => {


    return (
        <div className="carte"  styles={{backgroundImage :`url(${image})`}}>
            <img src="./images/cartes/Carte_Modele_Degats.png" alt="Bord de carte"/>
            <p>{name}</p>
            <p>{type}</p>
            <p>{mana}</p>
            <p>{attack}</p>
            <p>{HP}</p>
            <p>{desc}</p>
            <p>{effect}</p>
        </div>
    )
}

export default Card;