import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
        <nav className="NavBar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL
            </Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar