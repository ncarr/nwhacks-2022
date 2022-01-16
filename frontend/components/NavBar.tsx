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
                    LOGO_PLACEHOLDER
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'menu-x' : 'menu-bars'}>___.</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a className="nav-links" href="https://google.com">Item 1</a></li>
                    <li><a className="nav-links" href="https://google.com">Item 1</a></li>
                    <li><a className="nav-links" href="https://google.com">Item 1</a></li>
                    <li><a className="nav-links" href="https://google.com">Item 1</a></li>
                </ul>
                <button className="login-button"><a href="/api/auth/login">Login</a></button>
            </nav>
        )
        
    }

}

export default NavBar