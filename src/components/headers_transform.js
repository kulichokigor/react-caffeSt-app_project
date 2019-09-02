import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function heandlers(props){
    if(!props.headers){
        return <h3>{props.headersThree}</h3>
    }else{
        return <h2>{props.headers}</h2>  
    }
}


export default (props)=>{
    
    return(
       
        <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={true}
            transitionAppearTimeout={3000}
            transitionEnter={false}
            transitionLeave={false}>
                {heandlers(props)}
        </ReactCSSTransitionGroup>
    )
}