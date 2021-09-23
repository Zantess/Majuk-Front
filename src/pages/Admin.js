import React, { useState } from 'react';
import Card from '../components/Card'
import CreateCards from '../components/CreateCards'
import "../Style/Card.css"
import "../Style/Admin.css"
import axios from 'axios';

const url = 'http://localhost:5000/cards';

const Admin = () => {


    const [state, setState] = useState({
        mana:'',
        attack:'',
        HP:'',
        name:'',
        effect:'',
        desc:'',
        image:'',
        type1:'creature',
        ssType:'',
        creature: ['humain', 'Elementaire', 'Morts-vivants', 'Dragon','Bête'],
        sort: ['Degat', 'Soin', 'Buff', 'Persistant','Contrôle'],
        artefact: ['Equipement','Piege'],
        hero: ['Divinite']
    })

    const [type1, setType1] = useState('creature');


    const handleChange = e => {        
        if(e.target.name == 'type1'){
            setState({...state , [e.target.name] : e.target.value, ['ssType'] : state[e.target.value][0]});
        }else{
            setState({...state , [e.target.name] : e.target.value});
        }
    }

    const afficheSousType = () => {
        return state[state.type1].map((item) => (
            <option value={item} key={item}>{item}</option>
        ))
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        axios.post(url, {...state , type: [state.type1,state.ssType]})
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => console.log(error))
    }


    return (
        
        <div className='Admin_fond'>
            
            <div className='Container_form'>

                <Card state={state} />


                <CreateCards className="formCard" handleChange={handleChange} affiche={afficheSousType} submit={handleSubmit}/> 

            </div>
    

        </div>
    )
}

export default Admin;