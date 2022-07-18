import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Movies from './Movies'
import './App.css'

function App(){
  return(

      <Router>
         <Navigation />
         <div className='App'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
          </Switch>
        
        </div>
      </Router>
    
   )

   
}

export default App
