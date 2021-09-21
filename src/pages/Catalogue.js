import React from 'react';


const test = [
    {'id' : 0,
    'name' : 'test',
    'mana' : 0,
    'cost' : 0,
    'HP' : 0,
    'desc' : "Test",
    'effect' : 'Aucun',
    'type' : ['Aucun']
},
{
    'id' : 1,
    'name' : 'Test2',
    'mana' : 1,
    'cost' : 1,
    'HP' : 1,
    'desc' : "Test2",
    'effect' : 'Aucun',
    'type' : ['Aucun']   
},
{
    'id' : 2,
    'name' : 'Test3',
    'mana' : 3,
    'cost' : 3,
    'HP' : 3,
    'desc' : "Test3",
    'effect' : 'Aucun',
    'type' : ['Aucun']
}]

const Catalogue = () => {
    return (
    <div>
        <h1 className='catalogue'> {test.map((name) => 
        <h1>{test.name}</h1>
        )}</h1>
    </div>
    );
};

export default Catalogue;