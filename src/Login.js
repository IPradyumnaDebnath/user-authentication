import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <form>
                    <div>
                        <input placeholder="Email" className="email"></input>
                    </div>
                    <div> <input type="password" placeholder="Password" className="password"></input></div>
                    <div>
                        <button type="submit"> Log in </button>
                    </div>
                    <div> <Link to="./Register">Create new account !</Link></div>

                </form>
            </div>
        )
    }

}
export default Login