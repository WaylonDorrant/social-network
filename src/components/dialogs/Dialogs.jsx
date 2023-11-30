import React from "react";
import "./dialogs.css"
import Dialog from "./dialog/Dialog";

function Dialogs() {
    return (
        <div className="dialogs">
            <h2>Dialogs</h2>
            <div className="dialogs">
                <Dialog name="Bill Gates" message="I created new chip" />
                <Dialog name="Elon Musk" message="Go to the Mars" />
                <Dialog name="Jim Cary " message="Im the best Comic" />
            </div>

            <input type="text" />

            <button>Send</button>

        </div>
    )
}

export default Dialogs