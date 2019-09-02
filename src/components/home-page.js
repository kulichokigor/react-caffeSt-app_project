import React from 'react';
import '../css/home-page.css';
import '../css/normalize.css';
import logo from '../img/logo.png';
import Slider from '../components/slider';
import ProductsBlock from '../components/third_block_home';
import Headers from '../components/headers_transform';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faViber, faInstagram } from '@fortawesome/free-brands-svg-icons';


const headers = ['вдосконалення', 'check other offers'];

export default (props)=>{
    return(
        <div className="site-body">
        <header>
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
            <div>
                <Slider/>
            </div>
          </div>
        </header>
        <main>
          <div className="conteiner">
            <section>
              <div className="section-main-logo">
                  <Headers 
                    headers={headers[0]}
                  />
                <span>Музика під час обіду - це образа і для кухаря, і для скрипаля</span>
              </div>
            </section>
            <section>
                <div className="section-main-item">
                  <div>
                    <p>desserts</p>
                    <p><hr color='#d89b64'/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p>smothies</p>
                    <p><hr color='#151b29'/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p>breackfast</p>
                    <p><hr color='#d89b64'/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
            </section>
            <section>
                <Headers 
                    headersThree={headers[1]}
                  />
              <div className="details-box">
                <div>
                  <div>
                    <p>details</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <input type="button" value="preparation of our dishes"/>
                  </div>
                </div>
              </div>
            </section>
            <ProductsBlock/>
          </div>
        </main>
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
      </div>
    )
}