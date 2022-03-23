import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img 
                    className="beerLogo" 
                    src="https://www.pinclipart.com/picdir/big/522-5226958_beer-text-mug-line-clipart-beer-icon-png.png" 
                    alt='beer-logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/beer">Our Beer</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/About">About us</a></li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;