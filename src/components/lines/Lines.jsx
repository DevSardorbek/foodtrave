import React from 'react'
import "../../sass/__lines.scss"
import { NavLink } from 'react-router-dom'
const isLogin= localStorage.getItem("token" )
const Lines = () => {
  return (
    <div className='lines__wrapper'>
        <div className="container">
            <div className="lines__section">
                <p>{isLogin ? "About us" : "login"}</p>
                <div className='line'>
                  <NavLink to={"/"}>
                    <p>home</p> 
                  </NavLink> -
                    <p>{isLogin ? "About us" : "login"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lines