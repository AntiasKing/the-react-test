import React from 'react';
import './App.css';
import Header from './Header';
import Instructions from './Instructions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import Form from './Components/Formulaire';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={Acceuil} />
        <Route path="/form" component={Form} />
        <Route path="/instructions" component={Instructions} />
      </Router>
    </div>
  );
}

export default App;
