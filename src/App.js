import React, { useState } from 'react';
import { AppContext, defaultAppState } from './components/AppContext/index';

import HeaderMain from './components/HeaderMain';
import ListMain from './components/ListMain';
import Intro from './components/Intro/index';


const App = () => {

    const [appState, setState] = useState(defaultAppState)

    return(
        <>
            <HeaderMain />
            <Intro />
            <div className="app-bg"></div>
            <div className="wrapper">
                <AppContext.Provider value={{ appState, setState }}>
                    <ListMain />
                </AppContext.Provider>
            </div>
        </>
    )
}

export default App;
