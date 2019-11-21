import React, { Component } from 'react'
// import {firebase}from '../../Firebase/index.js'
import Button from '../../components/Button'
// import Input from '../../components/Input/input'
// import Card from '../../components/Card'
// import Modal from '../../components/Modal'
import { HomeContainer } from '../../styles'


export default class Home extends Component {

   constructor(props){
       super(props)

       this.state = {
        items:[],
        modalWin: false,
        name: "",
        isLogged: false,
        user: {
            displayName: localStorage.getItem("displayName"),
            photoURL: localStorage.getItem("photoURL")
            }
        }
   }

    componentDidMount(){
    }

    toggleModal(){
        this.setState({modalWin: !this.state.modalWin})
    }
    
    render() {
       
        return (
            <HomeContainer>  
              { this.state.user.displayName ?
                <Button 
               value = {"Criar Lista"}
               fontSize="18px"
               backgroundBtn= "#bababa"
               to={{pathname:"/gifted"}}
            //    action={()=>{this.loginSocial()}}
            />
        :
        <Button 
            value = {"Ver Listas"}
            fontSize="18px"
            backgroundBtn= "#bababa"
            to={{pathname:"/gifted", }}
            //    action={()=>{this.loginSocial()}}
            ></Button>
        }

            
            </HomeContainer>
        )
    }
}

// to={{pathname:"/giftlist", state:{ giftedKey: key} }}
