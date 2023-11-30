import React from "react";
import "./profile.css"
import avatar from "../../img/brat2.jpg"
import Posts from "./posts/Posts";

function Profile(props) {
  return (
    <div className="profile">
      <div className="me">
        <img src={avatar} alt="" />
        <p>{props.name}</p>
      </div>
      <Posts name={props.name} />
    </div>
  )
}

export default Profile