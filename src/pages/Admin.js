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
        type:[],
        type1:'creature',
        ssType:'humain',
        creature: ['humain', 'Elementaire', 'Morts-vivants', 'Dragon','Bête'],
        sort: ['Degat', 'Soin', 'Buff', 'Persistant','Contrôle'],
        artefact: ['Equipement','Piege'],
        hero: ['Divinite']
    })

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

    const Submit = (e) => {
        e.preventDefault();
        // console.log('coucou');
        // console.log(state);
        // console.log({...state , type: [state.type1,state.ssType]});

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


                <CreateCards className="formCard" handleChange={handleChange} affiche={afficheSousType} Submit={Submit}/> 

            </div>
    

        </div>
    )
}

export default Admin;