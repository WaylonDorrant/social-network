import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";




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
    getState(){
        return this._state
    },

    rerenderTree() {
        console.log("fakeFunction");
    },
    subscribe(observer) {
        this.rerenderTree = observer
    },



    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage,action)
        this._state.dialogPage  = dialogReduser(this._state.dialogPage,action )
        this.rerenderTree(this._state)
        
    },



}
export default store







