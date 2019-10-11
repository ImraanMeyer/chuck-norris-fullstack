import React from 'react';

const Card = ({joke}) => {
    return (
        <> 
            {Object.values(joke).map(lol => (
                <div key={lol['id']} className="jokes">  
                    <li>Joke No: {lol['id']}</li>
                    <li>{lol['joke']}</li>
                </div>
              ))}
        </>
    )
}

export default Card;