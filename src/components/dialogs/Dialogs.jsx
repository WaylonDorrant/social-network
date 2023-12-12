import React from "react";
import "./dialogs.css"
import Dialog from "./dialog/Dialog";



function Dialogs(props) {
    return (
        <div className="dialogs">
            <h2>Dialogs</h2>
            <div className="dialogs">
               {props.dialogPage.dialogData.map( e => <Dialog name={e.name} message={e.message} id={e.id} />)}
              
            </div>

            <input type="text" />

            <button>Send</button>

        </div>
    )
}

export default Dialogs