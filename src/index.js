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

import { ShowCards, GetAllRoutines } from "./components";


const App = () => {
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    return (
      <Router>
          <div className='App'>
              <Switch>
                  <Route exact path='/'>
                    <MainNavbar />
                    {/* <Homepage/> */}
                  </Route>
                  <Route path='/activities'>
                    <MainNavbar />
                    <ShowCards activities={activities} setActivities={setActivities} />
                  </Route>
                  <Route path='/routines'>
                    <MainNavbar />
                    <GetAllRoutines routines={routines} setRoutines={setRoutines} />
                  </Route>
              </Switch>
          </div>
    </Router>
    )
  };
  
  ReactDOM.render(<App />, document.getElementById("app"));