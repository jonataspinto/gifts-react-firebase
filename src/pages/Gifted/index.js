import React, { Component } from 'react'
import {firebase} from '../../Firebase/index.js'
import Gifted from '../../models/Gifted'
import Button from '../../components/Button'
import Input from '../../components/Input/input'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import { GiftedPage, ButtonAdd } from '../../styles'
import { Icon } from '@material-ui/core';
import {Lang} from '../../pt'
import {userAuthenticated} from '../../auth'

export default class GiftedContainer extends Component {

    state ={
        items:[],
        gifteds: Gifted,
        gifted: new Gifted(),
        modalWin: false,
        loading: true,
        name: "",
        user: null
    }

    async componentDidMount(){
        userAuthenticated()
        await this.setState({user: localStorage.getItem("user")})
        firebase.database().ref('gifted')
        .on('value', (snapshot)=>{
            let res = snapshot.val()
            this.setState({gifteds: res, loading: false})            
        })
        // this.setState({user: localStorage.getItem("user")})
        const ai =  localStorage.getItem("user")
        console.log(ai.displayName)
    }

    toggleModal(){
        this.setState({modalWin: !this.state.modalWin})
    }

    onChange = (event)=>{
        const gifted = Object.assign({}, this.state.gifted)
        const input = event.target.name
        gifted[input] = event.target.value
        this.setState({gifted: gifted})
    }

    onSubmit = (event)=>{
        event.preventDefault()        
        this.insertGifted()
        this.toggleModal()        
    }

    insertGifted(){
        firebase.database().ref('gifted').push(this.state.gifted)
    }

    render() {
        const { gifteds, gifted, modalWin, loading} = this.state
        return (
            <GiftedPage>  {
                loading ? 
                <Loading/> :
                           
                Object.keys(gifteds).map((key)=>{
                    return gifteds[key].name &&
                    <Card
                        imgSrc={gifteds[key].imgSrc}
                        value = {gifteds[key].name}
                        fontSize="18px"
                        backgroundBtn= "#bababa"
                        to={{pathname:"/giftlist", state:{ giftedKey: key} }}
                    />
                })}

                <Modal showModal={modalWin}>
                    <h1>{Lang.welcomeGifted}</h1>
                    <Input
                        type="text"
                        name="name"
                        value={gifted.name}
                        onChange={this.onChange}
                    />

                    <br/>

                    <Input
                        type="text"
                        name="imgSrc"
                        value={gifted.imgSrc}
                        onChange={this.onChange}
                    />

                    <Button
                    action={this.onSubmit} 
                    value={Lang.create} 
                    fontSize={"18px"} 
                    backgroundBtn={"#bababa"}
                    />      
                </Modal>

                { loading ||
                    <ButtonAdd onClick={()=>{this.toggleModal()}}>
                    <Icon className={'fa fa-plus-circle'}  style={{ fontSize: 60, color: 'action' }}>
                        add_circle
                    </Icon>
                </ButtonAdd> }  
                  
            </GiftedPage>
        )
    }
}
