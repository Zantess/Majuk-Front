import React, { useState } from 'react';


class FetchDeck extends React.Component {

    cartes = [];

    componentDidMount(){
        let cartes_tmp = [];
    fetch('http://localhost:5000/deck/')
        .then(res => {
            res.json().then(data => {
                data[0].cardId.map(id => {
                    fetch('http://localhost:5000/cards/' + id + '')
                        .then(res => {
                            res.json().then(data => {
                                cartes_tmp.push(data); 
                            })
                        })
                })
            })
        }).then( res => {
            this.setState( { cartes : cartes_tmp});
            //setCartes(cartes_tmp);
        });
    }

    render() {
        return '';
    }

};


export default FetchDeck;