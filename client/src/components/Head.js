import React from 'react';

const Head = ({getJokes}) => {
    return (
        <div>
            <nav style={navStyles}>
                <h4>Chuck Norris | Jokes</h4>
                <button style={buttonStyles} onClick={getJokes}>
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

const buttonStyles = {
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    background: '#ededed',
    width: '100px', 
    height: '40px', 
    borderRadius: '2.7em', 
    border: 'none'
}

export default Head;