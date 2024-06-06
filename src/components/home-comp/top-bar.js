import React from "react";
import './top-bar.css';

function TopBar(){
    return(
        <div className="container">
            <div>
                <img alt='logo1' src="" className="logo"></img>
                <img alt='logo1' src="" className="logo"></img>
            </div>
            <h3 className="topBar-text">top bar text</h3>
            <div>
                <button className="buttons">button1</button>
                <button className="buttons">button2</button>
            </div>
        </div>
    );
}

export default TopBar;