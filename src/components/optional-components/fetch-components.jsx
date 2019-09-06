import React from 'react';
import axios from 'axios';
import TestImg from '../../img/banner-1.jpg';
import {URL_SEC} from '../../page-admin-securitu/urls-firebase';


class MenuBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data:{
                imgUrl:TestImg,
                nameDish:"",
                components:"",
                price:"",
                test:'',
                fire:'',
            },
        }
    }
    componentWillMount(){

       axios.get(`${URL_SEC}.json`)
        .then(item=>{
            const baseId = [];
            Object.keys(item.data).forEach((key, index)=>{
                baseId.push({
                    id:key,
                    tex:index
                }) 
            })
            console.log(baseId[0].id)
            return baseId
        })
        .catch(error=>console.log(error))

        axios.get(`${URL_SEC}/-Lnx0P70JJuzv0sDvGu6.json`)
        
        .then(item=>{
         const baseKey = item.data
         this.setState({
             data: baseKey
         })
        })
        
        .catch(error=>console.log(error))
    }
    
    pushOnFireBase(){
       axios.post(`${URL_SEC}.json`, this.state.data)
    }

    // componentWillMount(){
    //     const data = 'https://api.jsonbin.io/b/5d6fea748ea2fe6d64ed1d10/9';
    //     const SECRET_KEY = '$2a$10$npw1WyCO.HcPIEadtmqKg.xU.G935GhTmzBrVN6s0vjt9J/YnuLvG'
    //     return fetch(data,{
    //         method:"GET",
    //         headers:{
    //             "secret-key": SECRET_KEY,
    //         },
    //     })
    //     .then((res) => res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:{
    //                 imgUrl:res.imgUrl,
    //                 nameDish:JSON.stringify(res.nameDish),
    //                 components:JSON.stringify(res.components),
    //                 price:JSON.stringify(res.price),
    //                 test: JSON.stringify(res.test),
    //             }
    //         })
    //     })
    //     .catch(err=>console.warn(err))
    // }

    // binPostData(){
    //     // const test = this.state.data.test
    //     const data = 'https://api.jsonbin.io/b';
    //     const SECRET_KEY = '$2a$10$npw1WyCO.HcPIEadtmqKg.xU.G935GhTmzBrVN6s0vjt9J/YnuLvG'
    //     return fetch(data,{
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'application/json',
    //             "secret-key": SECRET_KEY,
    //             "name":"cafe_test_jsonBin",
    //         },
    //         body:JSON.stringify({key:'fuck'})
    //     })
    //     .then(res=>console.log(res))
    //     .catch(err=>console.warn(err))
    // }
    // binUpdateData(){
    //     const data = 'https://api.jsonbin.io/b/5d6fea748ea2fe6d64ed1d10';
    //     const SECRET_KEY = '$2a$10$npw1WyCO.HcPIEadtmqKg.xU.G935GhTmzBrVN6s0vjt9J/YnuLvG'
    //     return fetch(data,{
    //         method:"PUT",
    //         headers:{
    //             'Content-Type': 'application/json',
    //             "secret-key": SECRET_KEY,
    //             "name":"cafe_test_jsonBin",
    //         },
    //         body:JSON.stringify(this.state.data)
    //     })
    //     .then(res=>console.log(res))
    //     .catch(err=>console.warn(err))
    // }
    render(){
        const styleBox = {
            width:'750px', 
            height:'450px', 
            border:'1px solid #000',
            margin:"3px auto",
            display:'flex',
            justifyContent: 'space-between',
        }
        return(
            <div>
                {/* <Box/> */}
                {/* MenuBOX
                <button 
                    // onClick={this.binPostData.bind(this)}
                >Admin post</button>
                <button 
                    // onClick={this.binUpdateData.bind(this)}
                >Admin update</button>

                <div>{this.state.data.nameDish}</div>
                <div>{this.state.data.components}</div>
                <div>{this.state.data.price}</div>
                <div>{this.state.data.test}</div>
                <div style={
                    {background:`url(${this.state.data.imgUrl})no-repeat`,
                    width:'450px',
                    height:'250px', 
                    backgroundSize:'cover'
            }} className='serv-image'></div> */}
                <div style={styleBox}>
                <div style={{width:'40%', height:'450px', background:`url(${TestImg})no-repeat center`,backgroundSize:'cover'}}></div>
                <div style={{width:'60%',height:'450px'}}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            </div>
        )
    }
}

export default MenuBox