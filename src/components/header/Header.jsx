import React from "react"
import "./header.css"
import logo from "../../img/logo.jpg"
import { NavLink } from "react-router-dom"


function Header() {
  return (

    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div >
  )
}

export default Header