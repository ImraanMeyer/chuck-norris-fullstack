import React from 'react';
import Card from './Card';

const Cards = ({hits}) => {
    return(            
        <div className="jokes">
            {hits.map((joke, index) => (
                <Card key={index} joke={joke} /> 
            ))}
        </div>
    )
}

export default Cards;