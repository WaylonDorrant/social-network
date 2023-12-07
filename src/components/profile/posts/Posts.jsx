import React from "react";

import Post from "./post/Post";


function Posts(props) {
    return (
        <div className="posts">
            <h2>My Posts</h2>
            <input type="text" placeholder="Enter The Post" />
            <button>Add Post</button>
            {props.postData.map(e => <Post message={e.message} name={props.name} id={e.id} likes={e.likes} />)}
        </div>
    )
}

export default Posts