import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="container">
      <div className="row">
    <div className="card">
      <div className="img-container">
        {/* On click, log image and name to new array */}
        <img onClick={() => props.updateFriend(props.name)} name={props.name} src={props.image} alt="" />
      </div>
    </div>
    </div>
    </div>
  );
}

export default FriendCard;
