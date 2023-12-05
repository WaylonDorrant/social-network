import React from "react";
import "./dialogs.css"
import Dialog from "./dialog/Dialog";

let dialogItems = [
    { name: "Bill Gates", 
    message: "I created new chip Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius explicabo aut inventore ad. Id in voluptates, laboriosam, nulla autem quod esse saepe mollitia iusto quia, temporibus reiciendis nobis cum.", id:1 },
    {name: "Elon Musk", message:"Go to the Mars", id:2},
    {name: "Jim Cary", message: "Im the best Comic", id:3},
    {name: "Jim Cary", message: "Im the best Comic", id:3},

]

function Dialogs() {
    return (
        <div className="dialogs">
            <h2>Dialogs</h2>
            <div className="dialogs">
               {dialogItems.map( e => <Dialog name={e.name} message={e.message} id={e.id} />)}
              
            </div>

            <input type="text" />

            <button>Send</button>

        </div>
    )
}

export default Dialogs