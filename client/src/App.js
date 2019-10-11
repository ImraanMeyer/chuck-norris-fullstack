import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
// Component Imports
import Head from './components/Head';
import Cards from './components/cards/Cards';


const App = () => {
  const [hits, setHits] = useState([]);

  const getJokes = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    const status = response.status;
    
    if (status !== 200) throw Error(body.message);
    console.log(`server responded with a status of ${status}`)
    
    return setHits([body['value']]);
  }

  useEffect(() => {
    getJokes();
  }, [setHits])


  return (
    <div>
      <Head getJokes={getJokes} />
      <div style={{ display: 'flex', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
        <Cards hits={hits} />
      </div>
    </div>
  )
}

export default App;