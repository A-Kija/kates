import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';

function App() {
  return (
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
  );
}

export default App;
