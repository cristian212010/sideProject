import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Candidatos from './pages/candidatos';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/candidatos' component={Candidatos} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
