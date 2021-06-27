import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';

import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

import { ShowActivityCards, GetAllRoutines, LoginRegister, Home } from "./components";


const App = () => {
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    return (
      <Router>
          <div className='App'>
          <MainNavbar />
              <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path='/activities'>
                    <ShowActivityCards activities={activities} setActivities={setActivities} />
                  </Route>
                  <Route path='/routines'>
                    <GetAllRoutines routines={routines} setRoutines={setRoutines} />
                  </Route>
                  <Route path='/LoginRegister'>
                    <LoginRegister />
                  </Route>
              </Switch>
          </div>
    </Router>
    )
  };
  
  ReactDOM.render(<App />, document.getElementById("app"));