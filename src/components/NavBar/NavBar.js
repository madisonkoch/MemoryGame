import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar">
        <ul>
            <li><a href="/">Clicky Game</a></li>
            <li>Click an image to begin!</li>
            <li>Score: {props.current}  |  Top Score: 0</li>
        </ul>
    </nav>    
);
export default NavBar;