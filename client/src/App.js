import React, { useState, useEffect } from 'react';

import './App.css'
// Component Imports
import Head from './components/Head';
import Cards from './components/cards/Cards';
import ThemeToggle from './components/ThemeToggle';


const App = () => {
  const [hits, setHits] = useState(null);

  const getJokes = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    const {status, statusText} = response;
    
    if (status !== 200) throw Error(body.message);
    console.log(`server responded with a status of ${status} (${statusText})`)
    
    return setHits([body['value']]);
  }

  // .env.dev
  // HOST=name.herokuapp.com

  useEffect(() => {
    getJokes();
  }, [setHits])

  return (
    <div>
      <Head getJokes={getJokes} />
      <ThemeToggle/>
        <div style={{ display: 'flex', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
          {hits === null ? (<h3>Loading...</h3>) : (
            <Cards hits={hits} />
          )}
        </div>
    </div>
  )
}

export default App;