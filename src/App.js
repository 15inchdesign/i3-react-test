import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

/* Components */ 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Slider from './components/Slider';


function App() {
  return (
      <Router>
         <div className='App'>
            <Navbar />
            <div className='container'>
               <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/about' component={About}></Route>
               </Switch>
               <Slider />
            </div>
         </div>
      </Router>
  );
}

export default App;
