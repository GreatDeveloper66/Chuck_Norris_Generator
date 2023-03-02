
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
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
        <Route exact path="/chuck_norris">
          <ChuckNorris />
        </Route>
      </Switch>
    </Router>
  );
}



export default App

/*
import React from 'react';
import LoginForm from './SubComponents/LoginForm.js'

function App() {
  return (

   <LoginForm />
  );
}

export default App;



    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>


    import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

*/