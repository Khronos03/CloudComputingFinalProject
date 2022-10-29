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

    Repository.setIACollections(itemIA);
    //Repository.updateIACollections(itemIA.idDoc, updatedIA);
	};

  useEffect(() => {
		getCollections();
	}, []);

  return (
    <div className="App">
      <Initial />
    </div>
  );
}
export default App;
