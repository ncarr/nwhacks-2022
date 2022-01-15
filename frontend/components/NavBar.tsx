import React, { Component } from "react";
import styles from '../styles/Nav.module.css'

class NavBar extends Component {
state = {clicked: false}

handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

    render() {
        return(
            <nav className={styles.NavBarItems}>
                <h1>Nav Bar!<i className="fab fa-react"></i></h1>

                <div className={styles.menuIcon} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'menu-x' : 'menu-bars'}>Hello</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </nav>
        )
        
    }

}

export default NavBar