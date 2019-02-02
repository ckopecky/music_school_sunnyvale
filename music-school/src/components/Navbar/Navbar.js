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
        </React.Fragment>
    );
};

export default Navbar;