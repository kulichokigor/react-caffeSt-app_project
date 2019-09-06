import React from 'react';
import '../../css/box-dish.css';




export default (props)=>{
    return(
        <article>
            <div style={{background:`url(${props.src})no-repeat center`, backgroundSize:'100% 100%'}}></div>
            <div>
                <div className="title-box">
                    <div>
                        <p>Борщ гороховий</p>
                        <p></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="components-box">
                    <div>
                        <p>Компоненти</p>
                        <p>молоко, вода, сметана, буряк, риба, горошок зелений, часник, творожок</p>
                    </div>
                </div>
                <div className="price-box">
                    <div>
                        <p>15$</p>
                        <p>Total coast</p>
                    </div>
                </div>
            </div>
        </article>
    )
}