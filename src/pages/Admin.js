import React from 'react';
import Card from '../components/Card'
import CreateCards from '../components/CreateCards'
import "../Style/Card.css"
import "../Style/Admin.css"

const Admin = ({name,type,image,mana,attack,HP,desc,effect}) => {

    return (
        
        <div className='Admin_fond'>
            
            <div className='Container_form'>

                <Card name={name} type={type} mana={mana} attack ={attack} HP={HP} desc={desc} effect={effect} image ={image} />

                <CreateCards className="formCard"/> 

            </div>
    

        </div>
    )
}

export default Admin;