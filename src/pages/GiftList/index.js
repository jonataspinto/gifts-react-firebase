import React, { Component } from 'react'
import firebase from '../../services/Firebase/firebase.js'
import {
  Button,
  Card,
  Loading,
  Input
} from '../../components/elements'
import {
  Modal
} from '../../components/modules'
import Item from '../../models/Item'
import {GiftListContainer, ButtonAdd, Form} from './styles'
import {Lang} from '../../assets/constants/pt'
import { Icon } from '@material-ui/core';

export default class giftList extends Component {
    state={
        key: this.props.location.state.giftedKey,
        items: {},
        loading: true,
        modalWin: false,
        itemSelected: {},
        item: new Item(),
        modalContent:""
    }

    componentDidMount(){
        firebase.database().ref(`gifted/${this.state.key}`)
        .on('value', (snapshot)=>{
            let res = snapshot.val()
            let items = Object.keys(res.items).map((key)=>{
                return res.items[key]
            })
            setTimeout(()=>{
                this.setState({items: items, loading: false})
            },1000)
        })
    }

    toggleModal(){
        this.setState({modalWin: !this.state.modalWin})
    }

    onChange = (event)=>{
        const item = Object.assign({}, this.state.item)
        const input = event.target.name
        item[input] = event.target.value
        this.setState({item: item})
    }

    onSubmit = (event)=>{
        const{item} = this.state
        event.preventDefault()

        firebase.database().ref(`gifted/${this.state.key}`)
        .child("items")
        .push(item)
        this.toggleModal()

    }

    render() {
        const { loading, items, modalWin, itemSelected, item, modalContent } = this.state
        return (
            <GiftListContainer>{ 
                loading ?
                    <Loading/>
                :
                items.map(item=>{
                  return item.name &&
                  <Card
                    imgSrc={item.imgSrc}
                    action = {()=>{
                        this.setState({itemSelected: item, modalContent: "card"}) 
                        this.toggleModal()
                    }}
                    name={item.name}
                    value = {Lang.viewItem}
                    fontSize="18px"
                    backgroundBtn= "#bababa"
                    background="#f4f4f4"
                    >
                    {/* <ButtonClose>
                    <Icon className={'fa fa-plus-circle'}  style={{ fontSize: 30, color: 'action' }}>
                        close
                    </Icon>
                    </ButtonClose> */}
                    </Card>
                })
            }

                <Modal showModal={modalWin} toggleModal={()=> this.toggleModal()}>{
                    modalContent === "card" ? 
                        <Card
                        imgSrc={itemSelected.imgSrc}
                        action = {()=>{this.toggleModal()}}
                        value = {Lang.sign}
                        fontSize="18px"
                        backgroundBtn= "#bababa"
                        background="#f4f4f4"
                        />
                    :                       
                    <Form>    
                        <Input
                            type="text"
                            name="name"
                            value={item.name}
                            onChange={this.onChange}
                        />
                        <Input
                            type="text"
                            name="imgSrc"
                            value={item.imgSrc}
                            onChange={this.onChange}
                        />
                        <Button
                        action={this.onSubmit} 
                        value={Lang.add} 
                        fontSize={"18px"} 
                        backgroundBtn={"#bababa"}
                        />
                    </Form>
                    }
                </Modal>  
                {loading ||
                <ButtonAdd onClick={()=>{
                    this.setState({modalContent: "add"})
                    this.toggleModal()}}>
                    <Icon className={'fa fa-plus-circle'}  style={{ fontSize: 60, color: 'action' }}>
                        add_circle
                    </Icon>
                </ButtonAdd> }      
            </GiftListContainer>
        )
    }
}
