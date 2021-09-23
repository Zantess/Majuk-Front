import React from 'react';
import axios from 'axios';
import '../App.css';
import Card from './Card'

const url = 'http://localhost:5000/cards';

export default class CreateCards extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        name:'',
        image:'',
        type:[],
        mana: Number,
        attack:Number,
        HP: Number,
        desc: '',
        effect:''
      }
    }
      handleChange = event => {
          this.setState({[event.target.name]: event.target.value})
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
          const {name, mana, attack, HP, desc, effect, type, image} = this.state
        return (
            <div className="newCard">
            <Card  name={name} mana={mana} attack={attack} HP={HP} image={image} type={type} desc={desc} effect={effect} />
                
            <form onSubmit={this.handleSubmit}>
                <label>Nom de carte:
                <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                </label>
                <label>Image:
                <input type="file" name="image" value={image} onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label>Coût en mana:
                <input type="text" name="mana" value={mana} onChange={this.handleChange}></input>
                </label>
                <label>Attack:
                <input type="text" name="attack" value={attack} onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label>HPs:
                <input type="text" name="HP" value={HP} onChange={this.handleChange}></input>
                </label>
                <label>Description:
                <input type="text" name="desc" value={desc} onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label>Effets:
                <input type="text" name="effect" value={effect} onChange={this.handleChange}></input>
                </label>
                <label>Type:
                <input type="text" name="type" value={type} onChange={this.handleChange}></input>
                </label>
                <br></br>
                <button type="submit" className="buttons">CRÉER</button>
            </form>
            </div>
        )
      }
        
}
