import React from "react";
import avatarMini from "../../../../img/brat1.png"

function Post(props) {
    return (
        <div className="post">
            <img src={avatarMini} alt="" />
            <span>{props.name}</span>
            <p>{props.message}</p>
            <p className="likes"><span>{props.likes}</span> likes</p>
        </div>
    )
}

export default Post