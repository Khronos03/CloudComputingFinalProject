import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Repository } from './Projects/Repository';
import "./custom.css";


function App() {

  const getCollections = useCallback(async () => {
		const collectionsFromRepository = await Repository.getIACollections();
    console.table(collectionsFromRepository);
	}, []);

  const saveCollections = async () => {
    const itemIA = {
      data: "DATOS DE EJEMPLO DOS"
    };

    Repository.setIACollections(itemIA);
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

        <button 
							className="p-3 font-bold text-center text-white duration-75 ease-linear bg-blue-800 border-blue-800 rounded-md shadow-xl border-1 hover:bg-blue-900"
        onClick={() => saveCollections()}>
							Save Items IA
				</button>

      </header>
    </div>
  );
}
export default App;
