import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';


const App = () => {
    return (
        <MainNavbar />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app'));