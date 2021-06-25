// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';
// import Activities from './components/Activities';



// const App = () => {
//     const [activities, setActivities] = useState([]);
//     return (
//     <div>
//         <MainNavbar />
//         <Activities />
//     </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('app'));

import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { GetAllActivities, GetAllRoutines, Homepage } from "./components";


const App = () => {
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    return (
      <Router>
          <div className='App'>
              <Switch>
                  <Route exact path='/'>
                    <MainNavbar />
                      <Homepage/>
                  </Route>
                  <Route path='/activities'>
                    <MainNavbar />
                      <GetAllActivities activities={activities} setActivities={setActivities} />
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