import React from 'react';
import Header from '../header_components/header';
import TitleH from '../header_components/title_transform';
import sectLogo from '../../img/buffet-backgr.png';
import MenuBox from '../optional-components/fetch-components';
import Box from '../../page-admin-securitu/administrator-page'

function menuBuffet(props){
    const titleMain = "menu day";
    const sactionMainLogo = {
        background: `url(${sectLogo})no-repeat`,
        width:'450px',
        height:'150px',
        margin:'auto',
        padding:'100px 0 0 0',
        backgroundSize: 'contain'
    }
    return(
        <div>
            <Header style={{background:'#f6f6f8', color:'#151b29', borderBottom:'1px solid #e6e6e6'}}/>
            <section>
                <div style={sactionMainLogo} className="section-main-logo">
                    <TitleH
                    headers={titleMain}
                    />

                    <span>Музика під час обіду - це образа і для кухаря, і для скрипаля</span>
                </div>
                <Box/>
            </section>
      </div>
    )
}

export default menuBuffet