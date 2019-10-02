import React from 'react';
import './App.css';
import Nav from './components/nav';
import Accueil from './components/accueil';
import Presentation from './components/presentation';
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Route exact path="/" component= {Accueil}/>
          <Route path="/presentation" component= {Presentation} />
      </div>
    </BrowserRouter>
  );
}

export default App;
