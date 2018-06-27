import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar">
        <ul>
            <li><a href="/MemoryGame/">Clicky Game</a></li>
            <li>{props.message}</li>
            <li>Score: {props.current}  |  Top Score: {props.high}</li>
        </ul>
    </nav>    
);
export default NavBar;