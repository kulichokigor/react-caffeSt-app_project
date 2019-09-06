import React from 'react';
import Header from '../header_components/header';
import TitleH from '../header_components/title_transform';
import imgBuff from '../../img/buffet-backgr.png';
import BoxDish from '../optional-components/box-dish';
import imgDish from '../../img/borsh-fasol.jpg';
import Footer from '../footer_component/footer_component'

const titlePage = "Menu furshet";
const backImage = {
    background: `url(${imgBuff})no-repeat`,
    width:'550px',
    height: '150px',
    margin: 'auto',
    padding:'110px 0 0 0'
}
export default (props)=>{
    return (
        <div>
            <Header style={{borderBottom:'1px solid #e6e6e6'}}/>
            <div style={backImage}>
                <TitleH headers={titlePage} />
            </div>
            <BoxDish 
                src={imgDish}
            />
            <Footer/>
        </div>
    )
}