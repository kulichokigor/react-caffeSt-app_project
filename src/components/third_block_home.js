import React from "react";
import "../css/third_block_home.css";
import Headers from '../components/headers_transform';

class ProductsBlock extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          headers:'the third block',
      }
  }
  ClickedBox =()=>{
    
  }
    render(){
        return(
            <section className="box-third-block">
                <div className="section-main-logo">
                    <Headers
                        headers={this.state.headers}
                    />
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                <div className="third-section-box">
                    <div>
                        <p>diffrent locations</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <p>fresh products</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <p>the best from the beggining</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
              </div> 
            </section>
        )
    }
}
export default ProductsBlock