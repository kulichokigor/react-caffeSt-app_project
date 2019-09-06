import React from 'react';
import Header from '../components/header_components/header';
import TitleH from '../components/header_components/title_transform';
import './styles-security-pages/admin-page.css'
// import TestImg from '../img/banner-1.jpg';



class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: [],
        }
    }
    creatState = (n) =>{
        console.log(n)
        const divs = []
        for(let i=0; i<n; i++){
            divs[i] = <div key={i} className="box-menu-buffet"></div>
        }
        return divs
    }
    
    // createBox(props){
    //     const result = props.creatState()
    //     this.setState({
    //         id: result
    //     })
    //     console.log(result)
    // }
    // createBox(value){
    //     const n = value;
    //     return n;
    // }
    
    render(){
        console.log(this.state.id)
        return(
            <div>
                <Header style={{borderBottom:'1px solid #e6e6e6', marginBottom:'35px'}}/>
                <TitleH headers={'Admin'}/>
                <div className="admin-block-1">
                    <h4>№1 Кількість блоків з блюдами</h4>
                    <input type="number" placeholder="к-ть блюд" onChange={event =>this.creatState(event.target.value)}/>
                    <button>Підтвердити</button>
                </div>
                {this.state.id}
            </div>
        )
    }
}

export default Admin