import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (

        <div className="container">
            <header>Home</header>
            <div><Link to='/Login'>Login</Link></div>
            <div><Link to='./Register'>Register</Link></div> 
        </div>
    )
}
export default Home