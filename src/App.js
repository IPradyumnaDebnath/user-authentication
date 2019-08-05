import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
