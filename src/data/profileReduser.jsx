const ADD_POST="ADD-POST"
const POST_CHANGE="POST-CHANGE"

let profileReduser = (state, action) => {
    if (action.type == ADD_POST) {
        let newPost = {
            message: (action.text),
            id: 4,
            likes: 0,
        }
        state.postData.unshift(newPost)
        state.newPostText = ""
    } else if (action.type == POST_CHANGE) {
        state.newPostText = action.text
    }
    return state
}
   
export default profileReduser


export let addPostAC = (text) => {
    return {
        type: "ADD-POST",
        text: text
    }
}


export let onPostChangeAC = (text) =>{
    return {
        type: "POST-CHANGE",
        text: text,
    }
}