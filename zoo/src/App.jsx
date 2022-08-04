import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { create } from './Functions/localStorage';
import DataContext from './Components/DataContext';

const localStorageKey = 'zoo';

function App() {

  const [createData, setCreateData] = useState(null);



  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(localStorageKey, createData);
  }, [createData]);

  return (
    <DataContext.Provider value={{
      setCreateData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            One of three columns
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
