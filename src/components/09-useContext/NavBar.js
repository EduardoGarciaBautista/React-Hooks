import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink activeClassName="active" to="/" className="navbar-brand">Use Context</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <NavLink exact activeClassName="active" to="/" className="nav-NavLink ml-2">Home</NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-NavLink ml-2">About</NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-NavLink ml-2">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
