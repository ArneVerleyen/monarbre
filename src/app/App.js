import React from 'react';

// Router import 
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import {
    ContactPage,
    HomePage,
    AboutPage
} from './pages';

// Routes
import * as Paths from './routes';

import './app.scss';
import PrivacyPage from './pages/PrivacyPage';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path={Paths.HOME} element={<HomePage/>} />
                    <Route exact path={Paths.CONTACT} element={<ContactPage/>} />
                    <Route exact path={Paths.OVER} element={<AboutPage/>} />
                    <Route exact path={Paths.PRIVACY} element={<PrivacyPage/>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;