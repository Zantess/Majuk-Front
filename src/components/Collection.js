import React, {useState} from 'react';
import {test} from './tempListOfCards'

// const [deck, setDeck] = useState([]);

// addToDeck = () =>{
//     setDeck()
// }

export default function Collection (){
    let temp = '';
    for(let i=0;i<test.length;i++){
        temp += `<div class="card" id=${test[i].id}>${test[i].name}</div>`
    }
    return(
        <div className="Collection">
            <div className="cards" dangerouslySetInnerHTML={{ __html: temp }}>
            </div>
            <div className="currentDeck" dangerouslySetInnerHTML={{ __html: temp }}>
            </div>
        </div>
    )
}