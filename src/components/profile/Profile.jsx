import React from "react";
import "./profile.css"
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo name={props.name} />
      <Posts
        name={props.name}
        postData={props.profilePage.postData}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
        
      />

    </div>
  )
}

export default Profile