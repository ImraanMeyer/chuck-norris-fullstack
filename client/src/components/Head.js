import React from 'react';

const Head = ({getJokes}) => {
    return (
        <div>
            <nav style={navStyles}>
                <h4>Chuck Norris | Jokes</h4>
                <button onClick={getJokes}>
                    Get Jokes!
                </button>
            </nav>
        </div>
    )
}

const navStyles = {
    background: '#535858',
    display: 'flex',
    paddingTop: '1em',
    paddingBottom: '1em',
    paddingLeft: '8em',
    paddingRight: '8em',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#e4e4e4',
}

export default Head;