import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Candidatos from './pages/candidatos';
import Login from './pages/login';
import Usuarios from './pages/usuarios';
import Perfil from './pages/perfil';
import Inicio from './pages/inicio';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/inicio' component={Inicio}/>
        <Route exact path='/candidatos' component={Candidatos} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/usuarios' component={Usuarios} />
        <Route exact path='/perfil' component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
