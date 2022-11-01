import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Repository } from './Projects/Repository';


function App() {

  const getCollections = useCallback(async () => {
		const collectionsFromRepository = await Repository.getIACollections();
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
        <a
          className="App-link"
          href="https://www.instagram.com/art.assets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NO entre aquí
        </a>

        <button onClick={() => saveCollections()}>
							Save Items IA
				</button>

      </header>
    </div>
  );
}
export default App;