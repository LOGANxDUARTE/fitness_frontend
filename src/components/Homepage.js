
import React from "react";
import { Link } from 'react-router-dom'
const HomePage = () => {
    return(
    <div className='home'>
        <Link to="/routines">
            <button type="button"> Routines </button>
        </Link>
        <Link to="/activities">
            <button type="button"> Activities </button>
        </Link>
    </div>
    )
}

export default HomePage;