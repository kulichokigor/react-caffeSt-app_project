import React from 'react';
import logo from '../../img/logo.png';
import '../../css/style-side/footer-style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faViber, faInstagram } from '@fortawesome/free-brands-svg-icons';

const footer = () =>{
    return(
        <footer>
            <div className="conteiner pos-rel">
            <div className="footer-logo-box">
              <img src={logo} alt="Buffet Cafe logo"/>
            </div>
            <div className="copyright">
              <p>Buffet Cafe</p>
              <p>Copyright 2019 MrJingls. All rights reserved</p></div>
            <div className="social-footer-box">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="social-facebook"/>
              <FontAwesomeIcon icon={faViber} size="2x" className="social-viber"/>
              <FontAwesomeIcon icon={faInstagram} size="2x" className="social-insta"/>
              </div>
          </div>
        </footer>
    )
}


export default footer