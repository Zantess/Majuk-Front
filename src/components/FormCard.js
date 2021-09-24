import React from 'react';
// import '../App.css';
import '../Style/Admin.css'
import { useState } from 'react';

const url = 'http://localhost:5000/cards';

const FormCard = (props) => {

    return (
        <div>

            <form onSubmit={(e) => { props.Submit(e) }} className="formNewCard">
                <div className="nomImg">
                    <label>Nom : </label>
                    <input type="text" name="name" value={props.name} onChange={props.handleChange} required></input>
                    <label>Image : </label>
                    <input type="file" name="image" id="img" value={props.image} onChange={props.handleChange} required></input>
                </div>
                <div className="statBox">
                    <label>Mana : </label>
                    <input className="stats" type="number" min='0' max='10' name="mana" value={props.mana} onChange={props.handleChange} required></input>
                    <label>Attack : </label>
                    <input className="stats" type="number" min='0' max='12' name="attack" value={props.attack} onChange={props.handleChange} required></input>
                    <label>HPs : </label>
                    <input className="stats" type="number" min='1' max='12' name="HP" value={props.HP} onChange={props.handleChange} required></input>
                </div>
                <div className="typeBox">
                <label>Type : </label>
                    <select name="type1" onChange={props.handleChange}>
                        <option>creature</option>
                        <option>sort</option>
                        <option>artefact</option>
                        <option>hero</option>
                    </select>
                    <select name="ssType" onChange={props.handleChange} >
                        {props.affiche()}
                    </select>
                </div>
                <div className="effetDescription">
                    <div className="effet">
                        <label>Effets:</label>
                        <textarea type="text" name="effect" value={props.effect} onChange={props.handleChange} required></textarea>                
                    </div>
                    <div className="description">
                        <label>Description:</label>
                        <textarea type="text" name="desc" value={props.desc} onChange={props.handleChange} required></textarea>
                    </div>
                </div>

                <div className="buttonBox">
                    <button className="submitButton" type="submit">Ajouter</button>
                </div>
                

            </form>
        </div>
    )
}

export default FormCard;


