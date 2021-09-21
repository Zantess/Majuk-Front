import React from 'react';
import Card from '../components/Card'
import "../Style/Card.css"

export default function Admin() {

    return (
        
        <div>
            <h1 className='Admin'> Admin</h1>
            
            <Card name="toto" type='["creature","humain"]' mana='10' attack ='10' HP='10' desc="creature nulle" effect="ne fait rien" image ='./images/cartes/00_crital_mana.jpg' />

        </div>



    )
}