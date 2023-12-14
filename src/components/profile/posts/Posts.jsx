import React from "react";

import Post from "./post/Post";

let postText = React.createRef()
function Posts(props) {
    let addPost = () => {
        props.addPost(postText.current.value);
        postText.current.value=""
    }
    
    return (
        <div className="posts">
            <h2>My Posts</h2>
            <input ref={postText} type="text" placeholder="Enter The Post" />
            <button onClick={addPost} >Add Post</button>
            {props.postData.map(e => <Post message={e.message} name={props.name} id={e.id} likes={e.likes} />)}
        </div>
    )
}

export default Posts