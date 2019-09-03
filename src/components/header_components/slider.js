import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import baner1 from '../../img/banner-1.jpg';
import baner2 from '../../img/buffet-image2.jpg';
import baner3 from '../../img/banner-3.jpg';
import '../../css/slider.css';

export default (props)=>{
        return(
            <div className="conteiner">
                <Carousel 
                    className="main-box-carusel" 
                    autoPlay='false' 
                    interval='6000' 
                    emulateTouch='true' 
                    showIndicators="false"
                    width="auto"
                    >
                    <div className="carusel-tagline">
                        <img src={baner1} alt="Перший альт"/>
                        <p>Мистецтво<br/>готувати<br/>смачно</p>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={baner2} alt="Другий альт"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={baner3} alt="Третій альт"/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }



