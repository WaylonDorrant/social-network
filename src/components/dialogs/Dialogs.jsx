import React from "react";
import "./dialogs.css"
import Dialog from "./dialog/Dialog";

let dialogText = React.createRef()


function Dialogs(props) {
    let addMessage = () => {
        props.addMessage (dialogText.current.value)
        dialogText.current.value=""
    }
    return (
        <div className="dialogs">
            <h2>Dialogs</h2>
            <div className="dialogs">
                {props.dialogPage.dialogData.map(e => <Dialog name={e.name} message={e.message} id={e.id} />)}
            </div>
            <input type="text" ref={dialogText} />
            <button onClick={addMessage} >Send</button>
        </div>
    )
}

export default Dialogs