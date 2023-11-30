import React from "react";

import Post from "./post/Post";

function Posts(props) {
    return (
        <div className="posts">
            <h2>My Posts</h2>
            <input type="text" placeholder="Enter The Post" />
            <button>Add Post</button>
            <Post message="Hi, World !" name={props.name} />
            <Post message="Im Bart Simpson" name={props.name} />
            <Post message="I Love Yall" name={props.name} />

        </div>
    )
}

export default Posts