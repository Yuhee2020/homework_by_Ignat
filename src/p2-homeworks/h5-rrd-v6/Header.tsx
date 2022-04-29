import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div >
            <NavLink className={({isActive})=>(isActive? s.activeLink: s.link)} to="/">PreJunior </NavLink>
            <NavLink className={({isActive})=>(isActive? s.activeLink: s.link)} to="/Junior">Junior </NavLink>
            <NavLink className={({isActive})=>(isActive? s.activeLink: s.link)} to="/Junior+">Junior+ </NavLink>

        </div>
    )
}

export default Header
