import React from "react";

import chrome from "./images/chrome.png";
import edge from "./images/edge.png";
import firefox1 from "./images/firefox1.png";
import firefox2 from "./images/firefox2.png";

import "./hardacc.css"

function HardAcc(){
    return(
        <div className="HardAcc">
            <div className="Image" style={{ backgroundImage : "url(" + chrome + ")" }}></div>
            <div className="Image" style={{ backgroundImage : "url(" + edge + ")" }}></div>
            <div className="Image" style={{ backgroundImage : "url(" + firefox1 + ")" }}></div>
            <div className="Image" style={{ backgroundImage : "url(" + firefox2 + ")" }}></div>
        </div>
    )
}

export default HardAcc


