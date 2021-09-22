import React, { useState } from 'react';
import { test } from './tempListOfCards'
import Card from './Card';
import Swal from 'sweetalert2'


export default function Collection() {
    const [deck, setDeck] = useState([]);
    const deleteDeck = () => {
        setDeck([])
    }
    const addToDeck = async (nameTag, mana) => {

        if (deck.length === 20) {
            Swal.fire({
                icon: 'error',
                title: 'IMPOSSIBLE',
                text: 'Votre deck contient déjà le maximum de cartes !',
            })
        } else {
            await setDeck([...deck, nameTag]);
            console.log(nameTag);
            console.log(deck);
        }
    }

    const url = 'http://localhost:5000/cards';
    
    return (
        <div className="Collection">
            <button onClick={deleteDeck} >Effacer le deck</button>

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