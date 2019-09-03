import React from "react";
import '../../css/style-side/header-style/header.css'
import logo from '../../img/logo.png';



export default (props)=>{
    return(
        <header style={props.style}>
          <div className="conteiner">
            <div className="top-header">
              <div className="main-logo pos-rel">
                <img src={logo} width="36" height="36" alt="Our logo"/>
              </div>
              <nav>
                <ul>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Gallery</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </div> 
        </header>
    )
}