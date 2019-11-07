import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-info shadow fixed-top">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span className="navbar-brand mb-0 h1">Click an Image to Begin!</span>
            <span className="navbar-brand mb-0 h1">Score: {props.currentScore} | Top Score: {props.topScore}</span>
        </nav>
    );
};

export default Navbar;