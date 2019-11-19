import React, { Component } from 'react'
import {firebase}from '../../Firebase/index.js'

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
        user: null
    }
   }

    componentDidMount(){
        this.authListener()
    }

    toggleModal(){
        this.setState({modalWin: !this.state.modalWin})
    }

    authListener(){
        firebase.auth().onAuthStateChanged((user)=> {        
            if (user) {
                this.setState({user})
              console.log("User is signed in.")
              console.log(this.state.user);
            }
        });
    }

    loginSocial(){
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) =>{
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            this.setState({user})
          })
          .catch(function(error) {
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // // ...
        });
    }

    logOutFacebook(){
        firebase.auth().signOut().then(function(result) {
            console.log("logout successful")
        }).catch(function(error) {
            console.log(error)
        });
    }
    
    render() {
       
        return (
            <HomeContainer>  
              { this.state.user ? <>
                <Button 
               value = {"Criar Lista"}
               fontSize="18px"
               backgroundBtn= "#bababa"
               to={{pathname:"/gifted" ,user:this.state.user}}
            //    action={()=>{this.loginSocial()}}
                ></Button>

            <Button 
               value = {"Sair"}
               fontSize="18px"
               backgroundBtn= "#bababa"
            //    to={{pathname:"/gifted"}}
               action={()=>{this.logOutFacebook()}}
                ></Button>
              </>
                :
                <Button 
               value = {"Login Facebook"}
               fontSize="18px"
               backgroundBtn= "#bababa"
            //    to={{pathname:"/gifted"}}
               action={()=>{this.loginSocial()}}
                ></Button>
                
            }
            </HomeContainer>
        )
    }
}

