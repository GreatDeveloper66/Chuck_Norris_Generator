import { Routes, Route } from "react-router-dom"
import LoginForm from './SubComponents/LoginForm';
import ChuckNorris from './SubComponents/ChuckNorris'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginForm /> } />
        <Route path="about" element={ <ChuckNorris /> } />
      </Routes>
    </div>
  )
}

export default App


/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//import RegisterForm from './SubComponents/RegisterForm';
import LoginForm from './SubComponents/LoginForm';
import ChuckNorris from './SubComponents/ChuckNorris'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/chucknorris">
          <ChuckNorris />
        </Route>
      </Switch>
    </Router>
  );
}




export default App

*/