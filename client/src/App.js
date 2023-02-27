import React from 'react';
import LoginForm from './SubComponents/LoginForm.js'

function App() {
  return (

   <LoginForm />
  );
}

export default App;

/*

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