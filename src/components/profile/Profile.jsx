import React from "react";
import "./profile.css"
import avatar from "../../img/brat2.jpg"
import avatarMini from "../../img/brat1.png"

function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={avatar} alt="" />
        <p>Bart Simpson</p>
      </div>
      <div className="posts">
        <h2>My Posts</h2>
        <input type="text" placeholder="Enter The Post" />
        <button>Add Post</button>
        <div className="post">
          <img src={avatarMini} alt="" />
          <span>Bart Simpson</span>
          <p>Some Text</p>
        </div>
      </div>
    </div>
  )
}

export default Profile