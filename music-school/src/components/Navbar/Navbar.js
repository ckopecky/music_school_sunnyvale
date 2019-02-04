import React from 'react';
import "./Navbar.css";
const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light navigation">  
                <a className="navbar-brand" href="/">The Music School</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto navigation">
                        {props.nav.map((item, i) => {
                            return (
                                <li key={Math.random(i)}>
                                    <a className="nav-link" href={`#${item}`}>{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <div className="secondary-navigation">
                <img src={props.logo} alt="logo"/>
                
                
                <ul className="secondary-navigation-ul">{props.secondaryNav.map((item, i) => {
                    console.log((item, props));
                    return (
                        <li key={Math.random(i)} className="btn-group dropdown secondary-navigation">
                            <button type="button" className="secondary-nav-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="secondary-nav-link-a">{item}</div>
                            </button>
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-item"> {item === 'EDUCATION' ? props.education.map((edlink, j )=> {
                                    return (
                                        <h6>{edlink}</h6>)
                                }) : item === 'PERFORMANCE' ? props.performance.map((perflink, j )=> {
                                    return (
                                        <h6>{perflink}</h6>
                                    )
                                }): props.community.map((commlink, j )=> {
                                    return (
                                        <h6>{commlink}</h6>
                                    )
                                })}
                                </div>
                            </div>
                        </li>
                    )
                    })}
                    </ul>
                <div className="secondary-nav-search">
                    <label>Search:</label>
                    <input type="search" placeholder="search"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;