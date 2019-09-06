import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styleTitleH2 = {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '35px',
    margin:'0',
    color: '#151b28',
}
const styleTitleH3 = {
    color: '#d89b64',
    fontWeight: 'bold',
    fontSize: "18px",
    textTransform: 'uppercase',
    borderBottom: '1px solid #d89b64',
    display: 'block',
    lineHeight: '50px',
    textAlign: 'center',
    width:'250px',
    margin: '90px auto',
}

function heandlers(props){
    if(!props.headers){
        return <h3 style={styleTitleH3}>{props.headersThree}</h3>
    }else{
        return <h2 style={styleTitleH2}>{props.headers}</h2>  
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