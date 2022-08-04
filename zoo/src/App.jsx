import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { create, read } from './Functions/localStorage';
import DataContext from './Components/DataContext';
import List from './Components/List';

const localStorageKey = 'zoo';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);


  useEffect(() => {
    setAnimals(read(localStorageKey));
  }, [lastUpdate])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(localStorageKey, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  return (
    <DataContext.Provider value={{
      setCreateData,
      animals
    }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
