import React from 'react';
import '../App.css';
import { useState } from 'react';

const url = 'http://localhost:5000/cards';

export default class CreateCards extends React.Component {
    constructor(props) {
        super(props)
        }

    render() {

        return (
            <div className="newCard">

                <form onSubmit={(e)=>{this.props.Submit(e)}}>
                    <table>
                        <tr>
                            <td>
                                <label className="lab1">Nom de carte:</label>
                            </td>
                            <td>
                                <input className="inp1" type="text" name="name" value={this.props.name} onChange={this.props.handleChange}></input>
                            </td>
                            <td>
                                <label className="lab2">Image:</label>
                            </td>
                            <td>
                                <input className="inp2" type="file" name="image" value={this.props.image} onChange={this.props.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="lab3">Coût en mana:</label>
                            </td>
                            <td>
                                <input className="inp3" type="number" min='0' max='10' name="mana" value={this.props.mana} onChange={this.props.handleChange}></input>
                            </td>
                            <td>
                                <label className="lab6">Type :</label>
                            </td>
                            <td>
                                <select className="inp6" name="type1" onChange={this.props.handleChange}>
                                    <option>creature</option>
                                    <option>sort</option>
                                    <option>artefact</option>
                                    <option>hero</option>
                                </select>
                                <select className="inp6" name="ssType" onChange={this.props.handleChange} >
                                    {this.props.affiche()}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="lab4">Attack:</label>
                            </td>
                            <td>
                                <input className="inp4" type="number" min='0' max='12' name="attack" value={this.props.attack} onChange={this.props.handleChange}></input>
                            </td>
                            <td>
                                <label className="lab5">HPs:</label>
                            </td>
                            <td>
                                <input className="inp5" type="number" min='1' max='12' name="HP" value={this.props.HP} onChange={this.props.handleChange}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="lab8">Description:</label>
                            </td>
                            <td>
                            <textarea className="inp8" type="text" name="desc" value={this.props.desc} onChange={this.props.handleChange}>
                           
                            </textarea>
                            </td>
                            <td>
                                <label className="lab7">Effets:</label>
                            </td>
                            <td>
                                <textarea className="inp7" type="text" name="effect" value={this.props.effect} onChange={this.props.handleChange}>
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className="buttons">CRÉER</button>
                            </td>
                        </tr>
                    </table> 
                    
                </form>
            </div>
        )
    }

}
