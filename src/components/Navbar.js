import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar hidde-sm">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to=''>Menu 1</Link>
                        <Link to=''>Menu 2</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;