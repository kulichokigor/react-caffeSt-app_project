import React from 'react';
import '../../css/home-page.css';
import '../../css/normalize.css';
import Footer from '../../components/footer_component/footer_component';
import Slider from '../../components/header_components/slider';
import ProductsBlock from '../../components/third_block_home';
import TitleH from '../../components/header_components/title_transform';
import Header from '../header_components/header'



const headers = ['вдосконалення', 'check other offers'];

export default (props)=>{
    return(
        <div className="site-body">
        <header>
          
            <Header style={{background:'#151b29', color:'#f6f6f8'}}/>
            
            <div>
                <Slider/>
            </div>
        </header>
        <main>
          <div className="conteiner">
            <section>
              <div className="section-main-logo">
                  <TitleH 
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
                <TitleH 
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
        <Footer/>
      </div>
    )
}