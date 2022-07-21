import { useState } from 'react';
import './App.scss';
import Buttons from './Components/008/Buttons';
import SqGroup from './Components/008/SqGroup';
import View from './Components/008/View';
function App() {

    const [view, setView] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <Buttons setView={setView} view={view}></Buttons>
                <View view={view} activView={1} element={<SqGroup/>}></View>
                <View view={view} activView={2} element={null}></View>
                <View view={view} activView={3} element={null}></View>
            </header>
        </div>
    );
}
export default App;