import React, { useState } from 'react';
import { test } from './tempListOfCards'
import Card from './Card';




export default function Collection() {
    const [deck, setDeck] = useState([]);
    const addToDeck = async (nameTag, mana) => {
        
        await setDeck([...deck, nameTag]);
        console.log(nameTag);
        console.log(deck);
    }


    return (
        <div className="Collection">
            <div className="cards" >
                {test.map((cards) => {
                    return (

                        <Card addToDeck={addToDeck} name={cards.name} mana={cards.mana} attack={cards.attack} HP={cards.HP} image={cards.image} type={cards.type} desc={cards.desc} effect={cards.effect} />

                    )
                })}
            </div>


            <div className="currentDeck" >
            {deck.map((addedCards) => {
                    return (

                        <div className="selectedCard">

                            <h1>
                                {addedCards}

                            </h1>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}