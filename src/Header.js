import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
        <div className = "logo">
        <a href="#default" style={{fontSize:50, }}>Groupify</a> 
        <a style={{textAlign:"match-parent"}} >Idan Schiller | Master Grouper Level</a>
        </div>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Login</a>
          <a href="#about">About</a>
        </div>
      </div>
    )
}
