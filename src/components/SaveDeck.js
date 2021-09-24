import React, { useState } from 'react';
import axios from 'axios';

export default class SaveDeck extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        name: '',
        image: '',
        type: [],
        mana: Number,
        attack: Number,
        HP: Number,
        desc: '',
        effect: ''
    }
}

    deck = this.props.deck;
    handleSubmit = () => {
        this.setState(this.props.deck)
        console.log(this.props.deck)
        console.log(this.state)

        axios.post('http://localhost:5000/deck/register', this.state)
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(error => console.log(error))
    }

        render(){
            return(
                <>
                <form onSubmit={() => this.handleSubmit()}>
                    <button type="submit">{console.log(this.deck)}</button>
                </form>
                </>
            )
        }
}

