import React from 'react'
import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function Navigation(){
 return(
    <div>
        <NavLink 
            to="/" 
            exact 
            style={linkStyles} 
            activeStyle={{
            background: "darkblue"
            }} 
        >
            Home
        </NavLink>
        <NavLink 
            to="/movies" 
            exact 
            style={linkStyles} 
            activeStyle={{
                background: "darkblue"
                }} 
        >
            Movies
        </NavLink>
    </div>
    
    
 )  

}

export default Navigation
