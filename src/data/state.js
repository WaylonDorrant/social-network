


let state = {
    profilePage: {
        postData: [
            { message: "Hi, World !", id: 1, likes: 10 },
            { message: "Im Bart Simpson", id: 2, likes: 2 },
            { message: "I Love Yall", id: 3, likes: 7 },

        ],
        newPostText: ""
    },

    dialogPage: {
        dialogData: [
            {
                name: "Bill Gates",
                message: "I created new chip Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius explicabo aut inventore ad. Id in voluptates, laboriosam, nulla autem quod esse saepe mollitia iusto quia, temporibus reiciendis nobis cum.", id: 1
            },
            { name: "Elon Musk", message: "Go to the Mars", id: 2 },
            { name: "Jim Cary", message: "Im the best Comic", id: 3 },
            { name: "Jim Cary", message: "Im the best Comic", id: 3 },

        ],
        newDialogText: ""
    }
}

let rerenderTree = () => {
    console.log("fakeFunction");
}
export let subscribe = (observer) => {
    rerenderTree = observer
}

export let addPost = (postText) => {
    let newPost = {
        message: (postText),
        id: 4,
        likes: 0,

    }
    state.profilePage.postData.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderTree(state)
}

export let addMessage = (messageText) => {
    let newMessage = {
        name: "John Doe",
        message: (messageText),
        id: 4,

    }
    state.dialogPage.dialogData.unshift(newMessage)
    state.dialogPage.newDialogText = ""
    rerenderTree(state)
}

export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}

export let onDialogChange = (text) => {
    state.dialogPage.newDialogText = text
    rerenderTree(state)
}

export default state
