import React from 'react';
import "./Navbar.css";
const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navigation">
                {props.nav.map(item => {
                    return (
                        <a className="nav-link" href={`#${item}`}>{item}</a>
                    )
                })}
            </nav>
            <div className="secondary-navigation">
                <img src={props.logo} alt="logo"/>
                <div className="secondary-nav-link">
                {props.secondaryNav.map(item => {
                    return (
                        <div className="secondary-nav-link-a">{item}</div>
                    )
                })}
                </div>
                <div className="secondary-nav-search">
                    <label>Search:</label>
                    <input type="search" placeholder="search"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;