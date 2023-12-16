import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Candidatos from './pages/candidatos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/candidatos' component={Candidatos} />
      </Switch>
    </Router>
  );
}

export default App;
