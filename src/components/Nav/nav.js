import React from "react";
import "./style.css";

class nav extends React.Component {
    render() {
        return (
            <nav className="nav navbar">
                <h1 className="title">Memory Game</h1>
                <br></br>
                <h4 className="title">Click on an image to earn points.</h4>
                <br></br>
                <h4 className="title">Make sure not to click on an image more than once!</h4>
            
            <div className="scores justify-content-end">
                <p id="score">Score: {this.props.currentScore} | Top Score: {this.props.topScore}</p>
            </div>
            </nav>
        )
    }
}

export default nav;