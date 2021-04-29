import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Layout} from './components/Layout'

{/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
function App() {
    return (
        <Router>
            <Layout/>
        </Router>
    );
}

export default App;
