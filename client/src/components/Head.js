import React from 'react';

const Head = ({getJokes}) => {
    return (
        <div>
            <nav className="navbar">
                <h4>Chuck Norris | Jokes</h4>
                <button onClick={getJokes}>
                    Get Jokes!
                </button>
            </nav>
        </div>
    )
}

export default Head;