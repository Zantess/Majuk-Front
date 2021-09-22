import React from 'react';
import axios from 'axios';
import '../App.css';
import { Button } from './Button';

const url = 'http://localhost:5000/users/register';
let isBanned = 0;
let score = 0;
let test = () => {
    console.log('OUI');
}

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            mail: '',
            pseudo: '',
            image: '',
            password: '',
            ban: isBanned,
            score: score,
            admin: Boolean
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        axios.post(url, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => console.log(error))
    }

    render() {
        const { nom, prenom, mail, pseudo, image,  password} = this.state
        return (
            <div className="outer" >
                <div className="middle" >
                    <div className="inner">
                    <div className="newUser">
                        <form onSubmit={this.handleSubmit}>
                            <label>Nom
                            <br></br>
                                <input type="text" name="nom" value={nom} onChange={this.handleChange}></input>
                            </label>
                            <br></br>
                            <label>Prenom
                            <br></br>
                                <input type="text" name="prenom" value={prenom} onChange={this.handleChange}></input>
                            </label>
                            <br></br>
                            <label>Pseudo
                            <br></br>
                                <input type="text" name="pseudo" value={pseudo} onChange={this.handleChange}></input>
                            </label>
                            <br></br>
                            <label>Mot de passe
                            <br></br>
                                <input type="password" name="password" value={password} onChange={this.handleChange}></input>
                            </label>
                            <br></br>
                            <label>Mail
                            <br></br>
                                <input type="text" name="mail" value={mail} onChange={this.handleChange}></input>
                            </label>
                            <br></br>
                            <label>Image
                            <br></br>
                                <div className="imagesContainer">
                                    <img src="https://media.hearthpwn.com/attachments/0/48/jaina.png"></img>
                                    <img src="https://media.hearthpwn.com/attachments/0/48/jaina.png"></img>
                                    <img src="https://media.hearthpwn.com/attachments/0/48/jaina.png"></img>
                                    <img src="https://media.hearthpwn.com/attachments/0/48/jaina.png"></img>
                                </div>
                            </label>
                            
                            <br></br>
                            
                            
                            <button type="submit" className="buttons">CRÉER</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}
