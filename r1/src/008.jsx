import { useState } from 'react';
import './App.scss';
import Buttons from './Components/008/Buttons';
import HelloWorld from './Components/008/HelloWorld';
import HelloWorld2 from './Components/008/HelloWorld2';
import SC from './Components/008/SC';
import SqGroup from './Components/008/SqGroup';
import View from './Components/008/View';
function App() {

    const [view, setView] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <Buttons setView={setView} view={view}></Buttons>
                <View view={view} activView={1} element={<SqGroup/>}></View>
                <View view={view} activView={2} element={<HelloWorld/>}></View>
                <View view={view} activView={3} element={<HelloWorld2/>}></View>
                <View view={view} activView={4} element={<SC/>}></View>
            </header>
        </div>
    );
}
export default App;