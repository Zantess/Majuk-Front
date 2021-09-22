import React from 'react';
import Card from '../components/Card'
import "../Style/Card.css"

export default function Admin() {

    return (
        
        <div>
            <h1 className='Admin'> Admin</h1>
            
            <Card name="Cristal de Mana" type={["Artefact","Mana"]} mana='0' attack ='1' HP='1' desc="creature nulle" effect="Ajoute 1 de mana pour ce tour." image ='./images/cartes/00_crital_mana.jpg' />

        </div>



    )
}