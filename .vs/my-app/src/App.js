import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Repository } from './Projects/Repository';
import Authentication from './Projects/Components/Authentication';
import Entrys from './Components/Entrys';

function App() {

  const getCollections = useCallback(async () => {
		const collectionsFromRepository = await Repository.getCollections("IAcollections");
    console.table(collectionsFromRepository);
  }, []);

  const saveCollections = async () => {
    const itemIA = {
      data: "DATOS DE EJEMPLO DOS"
    };

    Repository.setCollections("IAcollections", itemIA);
    //Repository.updateIACollections(itemIA.idDoc, updatedIA);
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IA Cloud Computing, Tapas  🐸
        </p>
        
      <Entrys/>

      </header>
    </div>
  );
}
export default App;