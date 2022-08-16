import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App() {

    return (
        <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <h1>Router</h1>
                <div className="container">
                    <Link to="/">Home Page</Link>
                    <Link to="/animals">Animals</Link>
                    <Link to="/plants">Plants</Link>
                </div>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<h2>Welcome Home</h2>}></Route>
                        <Route path="/animals" element={<h2>Animals Page</h2>}></Route>
                        <Route path="/plants" element={<h2>Plants Page</h2>}></Route>
                    </Routes>
                </div>
            </header>
        </div>
        </BrowserRouter>
    );
}
export default App;