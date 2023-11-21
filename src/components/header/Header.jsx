import React from "react"
import "./header.css"
import logo from "../../img/logo.jpg"

function Header() {
    return (
      <div className="header">
        <img src={logo} alt="" />
      </div>
    )
  }

  export default Header