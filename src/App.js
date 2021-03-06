import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

/* Components */ 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';



function App() {
  return (
      <Router>
         <div className='App'>
            <Navbar />
               <Switch>
                  <Route exact path='/' component={Home}>
                  </Route>
                  <Route exact path='/about' component={About} />
               </Switch>
         </div>
      </Router>
  );
}

export default App;
