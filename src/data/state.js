const ADD_POST="ADD-POST"
const POST_CHANGE="POST-CHANGE"
const ADD_MESSAGE="ADD-MESSAGE"
const DIALOG_CHANGE="DIALOG-CHANGE"

let store = {



    _state: {
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
    },

    rerenderTree() {
        console.log("fakeFunction");
    },
    subscribe(observer) {
        this.rerenderTree = observer
    },



    dispatch(action) {
        if (action.type == ADD_POST) {
            let newPost = {
                message: (action.text),
                id: 4,
                likes: 0,
            }
            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderTree(this._state)
        } else if (action.type ==  POST_CHANGE) {
            this._state.profilePage.newPostText = action.text
            this.rerenderTree(this._state)
        } else if (action.type == ADD_MESSAGE) {
            let newMessage = {
                name: "John Doe",
                message: (action.text),
                id: 4,
            }
            this._state.dialogPage.dialogData.unshift(newMessage)
            this._state.dialogPage.newDialogText = ""
            this.rerenderTree(this._state)
        } else if (action.type == DIALOG_CHANGE){
            this._state.dialogPage.newDialogText = action.text
            this.rerenderTree(this._state)
        }
    }


}
export default store


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




export let addMessageAC = (text) => {
    return {
        type: "ADD-MESSAGE",
        text: text
    }
}

export let onDialogChangeAC = (text) => {
    return {
        type: "DIALOG-CHANGE",
        text: text
    }
}
