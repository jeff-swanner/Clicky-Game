import React from "react";

function Navbar(props) {
    return (
        <div className="container">
            <div className="row">
                {props.canidates.map(canidate => (
                    <div className="col-lg-3 zoom" key={canidate.name}>
                        <img src={canidate.source} className="img-fluid  p-1" alt={canidate.name} onClick={props.handleIncrement}></img>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;