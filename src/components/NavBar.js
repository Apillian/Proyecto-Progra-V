import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';


function NavBar() {
  return (
<MainHeader>
            <button className="main-navigation_menu-btn">
                <span />
                <span />
                <span />

            </button>

            <h1 className="main-navigation_title">
                <Link to="/" exact>Ejercicio 1 </Link>
            </h1>
            </MainHeader>
  )
}

export default NavBar