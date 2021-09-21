import React from 'react';
import Card from '../components/Card'
import "../Style/Card.css"

export default function Admin() {

    return (
        
        <div>
            <h1 className='Admin'> Admin</h1>
            
            <Card name="toto" type='["creature","humain"]' mana='1' attack ='1' HP='1' desc="creature nulle" effect="ne fait rien" image ='./images/cartes/00_crital_mana.jpg' />

        </div>



    )
}