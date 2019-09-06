import React from "react";
import {NavLink} from 'react-router-dom';
import '../../css/style-side/header-style/header.css'
import logo from '../../img/logo.png';



export default (props)=>{
    return(
        <header style={props.style}>
          <div className="conteiner">
            <div className="top-header">
            <NavLink to="/" style={{color:'#f6f6f8'}}><div className="main-logo pos-rel">
                <img src={logo} width="36" height="36" alt="Our logo"/>
              </div>
            </NavLink>
              <nav>
                <ul>
                  <li>About</li>
                  <li>
                    <NavLink 
                      style={{textDecoration:'none', color:'#f6f6f8'}} 
                      to="/furshet"
                    >Menu</NavLink></li>
                  <li>Gallery</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </div> 
        </header>
    )
}