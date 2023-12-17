import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Candidatos from './pages/candidatos';
import Login from './pages/login';
import Usuarios from './pages/usuarios';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/candidatos' component={Candidatos} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/usuarios' component={Usuarios} />
      </Switch>
    </Router>
  );
}

export default App;
