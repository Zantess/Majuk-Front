import React, { useState } from 'react';
import Card from '../components/Card'
import "../Style/Card.css"
import "../Style/Admin.css"
import axios from 'axios';
import FormCard from '../components/FormCard';

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

    const [formKey,setFormKey] = useState(0);
    const [imgPath,setImgPath] = useState('');
    const [imgName,setImgName] = useState('');

    const handleImage = e =>{
        setState({...state, image : URL.createObjectURL(e.target.files[0])})
        setImgName(e.target.files[0].name);
        setImgPath(e.target.files[0])
        console.log(imgName);
        console.log(imgPath);
    }

    const handleChange = e => {        
        if(e.target.name == 'type1'){
            setState({...state , [e.target.name] : e.target.value, ['ssType'] : state[e.target.value][0]});
        }else{
            if(e.target.name == 'image'){
                handleImage(e);
            }
            else{
                setState({...state , [e.target.name] : e.target.value});
            }            
        }
    }

    const afficheSousType = () => {
        return state[state.type1].map((item) => (
            <option value={item} key={item}>{item}</option>
        ))
    }

    const Submit = (e) => {

        e.preventDefault();
        axios.post(url, {...state , type: [state.type1,state.ssType], image:`../images/cartes/${imgName}`})
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => console.log(error))

        axios.post('../images/cartes/',imgPath)
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(error => console.log(error))
        setFormKey(formKey + 1);
        
    }


    return (
        
        <div className='Admin_fond'>
            
            <div className='Container_form'>

                <Card state={state} />


                <FormCard key={formKey} className="formCard" handleChange={handleChange} affiche={afficheSousType} Submit={Submit} /> 

            </div>
    

        </div>
    )
}

export default Admin;