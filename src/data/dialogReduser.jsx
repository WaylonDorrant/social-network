const ADD_MESSAGE = "ADD-MESSAGE"
const DIALOG_CHANGE = "DIALOG-CHANGE"

let initialState = {
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

let dialogReduser = (state = initialState, action) => {
    if (action.type == ADD_MESSAGE) {
        let newMessage = {
            name: "John Doe",
            message: (action.text),
            id: 4,
        }
        state.dialogData.unshift(newMessage)
        state.newDialogText = ""
    } else if (action.type == DIALOG_CHANGE) {
        state.newDialogText = action.text
    }
    return state
}

export default dialogReduser

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
