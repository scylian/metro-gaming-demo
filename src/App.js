import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';

// Components
import HeaderBar from './components/HeaderBar';


function App() {
  return (
    <Router>
      <HeaderBar/>

      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
