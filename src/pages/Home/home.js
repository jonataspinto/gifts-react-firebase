import React, { Component } from 'react'
import firebase from '../../Firebase'
import Gifted from '../../models/Gifted'
import Item from '../../models/Item'
import Button from '../../components/Button'
import Input from '../../components/Input/input'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
// import {Link} from 'react-router-dom'
import { HomeContainer, ButtonAdd } from '../../styles'
import { Icon } from '@material-ui/core';

import {Lang} from '../../pt'
import Loading from '../../components/Loading'


export default class Home extends Component {

    state ={
        items:[],
        gifteds: Gifted,
        gifted: new Gifted(),
        modalWin: false,
        loading: true,
        name: ""
    }

    componentDidMount(){
        const req = firebase.database().ref('gifted')
        req.on('value', (snapshot)=>{
            let res = snapshot.val()
            // console.log(res)
            this.setState({gifteds: res, loading: false})
            // console.log(snapshot.val())
            console.log(this.state.gifted)
            console.log(this.state.gifteds);
            
        })
    }

    toggleModal(){
        this.setState({modalWin: !this.state.modalWin})
        console.log("close")
    }

    onChange = (event)=>{
        const gifted = Object.assign({}, this.state.gifted)
        const input = event.target.name
        gifted[input] = event.target.value
        this.setState({gifted: gifted})
        
        // this.setState({gifted: {name:event.target.value}})
        // console.log(gifted)
        // console.log(this.state.gifted);
        

    }

    onSubmit = (event)=>{
        event.preventDefault()
        console.log(this.state.gifted);
        // console.log(item);
        // let name = "cadeira"
        // let imgSrc= "https://tokstok.vteximg.com.br/arquivos/ids/1830441-670-670/Cadeira-Infantil-Amarelo-Country.jpg?v=637015836420570000"
        // let item = new Item(name, imgSrc)
        // console.log(item);
        // this.setState(state =>{state.items.push(item)})
        // console.log(this.state.items);
        // const gifted = Object.assign({}, this.state.gifted)
        // gifted.items = item
        // console.log(gifted);
        // console.log(this.state.gifteds);
        
        
        // firebase.database().ref('gifted').push(gifted)


        // this.setState(state => {state.gifted.items.push(item)})

        console.log(this.state.gifted);
        
        this.insertGifted()
        this.toggleModal()        
    }

    insertGifted(){
        firebase.database().ref('gifted').push(this.state.gifted)
    }

    render() {
        const { gifteds, gifted, modalWin, loading} = this.state
        return (
            <HomeContainer>  {
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
                  
            </HomeContainer>
        )
    }
}

