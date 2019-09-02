import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "../css/third_block_home.css"

class Test extends React.Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          data: [],
          name:''
        };
      }
      handleChange(e){
        this.setState({name:e.target.value})
    }
    add(){
        var arr = this.state.data.slice();
        arr.push({'id':(new Date()).getTime(),'name':this.state.name})
        this.setState({data:arr})
    }
    render(){
        return(
            <div>
                <div className="section-main-logo">
                <ReactCSSTransitionGroup
                    transitionName="anim"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <h2>{'the third block'}</h2>
                </ReactCSSTransitionGroup>
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
            </div>
        )
    }
}
export default Test