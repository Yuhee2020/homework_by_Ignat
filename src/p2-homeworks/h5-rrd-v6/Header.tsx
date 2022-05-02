import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"
import "./Header.css"

function Header() {
    return (
        <div>
            <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>

            <label className="btn-menu" htmlFor="hmt">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </label>

            <ul className="hidden-menu">
                <li><NavLink className={({isActive}) => (isActive ? s.activeLink : s.link)} to="/">PreJunior </NavLink></li>
                <li><NavLink className={({isActive}) => (isActive ? s.activeLink : s.link)} to="/Junior/*">Junior </NavLink></li>
                <li><NavLink className={({isActive}) => (isActive ? s.activeLink : s.link)} to="/Junior+/*  ">Junior+ </NavLink></li>
            </ul>

        </div>)
}

export default Header
