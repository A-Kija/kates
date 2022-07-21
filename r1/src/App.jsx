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
                <View view={view} activView={1}></View>
                <View view={view} activView={2}></View>
                <View view={view} activView={3}></View>
                <SqGroup></SqGroup>
            </header>
        </div>
    );
}
export default App;