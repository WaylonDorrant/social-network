import React from "react";
import avatar from "../../../img/brat2.jpg"

function ProfileInfo(props) {
    return (
        <div className="me">
            <img src={avatar} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default ProfileInfo