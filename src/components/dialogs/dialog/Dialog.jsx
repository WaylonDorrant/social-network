import React from "react";

function Dialog(props){
    return(
        <div className="dialog">
            <p className="name">{props.name}</p>
            <p className="message">{props.message}</p>
        </div>
    )
}

export default Dialog