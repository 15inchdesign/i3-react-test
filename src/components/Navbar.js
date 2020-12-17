import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        const title = 'i3 React Test';
        return(
            <nav role="navigation" className="navbar">
                <ul className="hidde-sm">
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/' className="logo mobile-logo">{title}</Link>
                        <Link to=''>Menu 1</Link>
                        <Link to=''>Menu 2</Link>
                    </li>
                </ul>
                 <div className="mobile-nav">
                    <div className="tabs">
                        <div className="tab">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1"><Link to='/'>Home</Link></label>
                            <div className="tab-content">
                                <ul>
                                    <li><a href="/">Sub item</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab">
                            <Link to='/about'>About</Link>
                        </div>
                        <div className="tab">
                            <Link to='/'>Menu 1</Link>
                        </div>
                        <div className="tab">
                            <Link to='/'>Menu 2</Link>
                        </div>
                    </div>   
                </div>
            </nav>
        );
    }
}

export default Navbar;