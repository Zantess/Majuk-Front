import React, { useState } from 'react';
import { test } from './tempListOfCards'
import Card from './Card';
import Swal from 'sweetalert2'
import { Howl } from 'howler';
import uiHover from '../sounds/uiHover.mp3';
import deckFull from '../sounds/deckFull.mp3';
import addedToDeck from '../sounds/addedToDeck.mp3';
import soundCollection from '../sounds/Collection.mp3'
import '../Style/collection.css'


export default function Collection() {

    const [deck, setDeck] = useState([]);
    const deleteDeck = () => {
        setDeck([])
    }

    const addToDeck = async (nameTag, mana) => {

        if (deck.length === 20) {
            let soundFull = new Audio(deckFull);
            soundFull.play();
            Swal.fire({
                icon: 'error',
                title: 'IMPOSSIBLE',
                text: 'Votre deck contient déjà le maximum de cartes !',
            })
        } else {
            let soundToDeck = new Audio(addedToDeck);
            soundToDeck.play();
            setDeck([...deck, nameTag]);

        }
    }
    const hoverSound = () => {
        let sound = new Audio(uiHover);
        sound.play();
    }

    const url = 'http://localhost:5000/cards';

    return (
        <div className="collection">
            <button onClick={deleteDeck} >Effacer le deck</button>

            <div className="cards" >
                {test.map((cards) => {
                    return (

                        <Card hoverSound={hoverSound} addToDeck={addToDeck} name={cards.name} mana={cards.mana} attack={cards.attack} HP={cards.HP} image={cards.image} type={cards.type} desc={cards.desc} effect={cards.effect} />

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