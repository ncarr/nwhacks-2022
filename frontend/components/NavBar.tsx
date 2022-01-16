import React, { Component } from "react";
import { Button } from "./Button";

class NavBar extends Component {
state = {clicked: false}

handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

    render() {
        return(
            <nav className="NavBarItems">
                <div className="website-logo">
                    <img className="logo" src="logo.png" />
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'menu-x' : 'menu-bars'}>___.</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a className="nav-links" href="https://google.com">Mathematics</a></li>
                    <li><a className="nav-links" href="https://google.com">Science</a></li>
                    <li><a className="nav-links" href="https://google.com">Social Studies</a></li>
                    <li><a className="nav-links" href="https://google.com">English</a></li>
                </ul>
                <button className="login-button"><a href="/api/auth/login">Login</a></button>
                <button className="login-button"><a href="/api/auth/logout">Logout</a></button>
            </nav>
        )
        
    }

}

export default NavBar