import React from "react";

import Post from "./post/Post";

let postText = React.createRef()
function Posts(props) {
    let addPost = () => {
        props.dispatch({type:"ADD-POST", text:postText.current.value });
        postText.current.value = ""
    }
    let onPostChange = () => {
        props.dispatch({type:"POST-CHANGE", text:postText.current.value})
    }

    return (
        <div className="posts">
            <h2>My Posts</h2>
            <input value={props.newPostText}
                ref={postText} type="text"
                placeholder="Enter The Post" 
                onChange={onPostChange}
                />


            <button onClick={addPost} >Add Post</button>
            {props.postData.map(e => <Post message={e.message}
                name={props.name} id={e.id} likes={e.likes} />)}
        </div>
    )
}

export default Posts