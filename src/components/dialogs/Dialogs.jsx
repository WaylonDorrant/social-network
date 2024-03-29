import React from "react";
import "./dialogs.css"
import Dialog from "./dialog/Dialog";
import { onDialogChangeAC,addMessageAC } from "../../data/dialogReduser";


let dialogText = React.createRef()



function Dialogs(props) {

   

    let addMessage = () => {
        props.dispatch(
            addMessageAC(dialogText.current.value)
        )
        dialogText.current.value = ""
    }
    let onDialogChange = () => {
        props.dispatch(
            onDialogChangeAC(dialogText.current.value)
        )
    }
    return (
        <div className="dialogs">
            <h2>Dialogs</h2>
            <div className="dialogs">
                {props.dialogPage.dialogData.map(e => <Dialog name={e.name} message={e.message} id={e.id} />)}
            </div>
            <input type="text" ref={dialogText}
                value={props.newDialogText}
                onChange={onDialogChange}
                placeholder="Enter Message"

            />
            <button onClick={addMessage} >Send</button>
        </div>
    )
}

export default Dialogs