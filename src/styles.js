import styled from 'styled-components'
import{ darken } from 'polished'

export const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;
    flex-wrap: wrap;
`
export const Form = styled(Container)`
    flex-direction: column;
    min-width: 30vw;
    min-height: 60vh;
    background-color: white
`

export const HomeContainer = styled(Container)`
    
`

export const GiftListContainer = styled(Container)`
    
`

export const BUTTON = styled.button` 
    padding: 8px;
    font-size: ${props=> props.fontSize};
    background-color: ${props => props.background};
    border: none;
    border-radius: 10px;
    outline: none;
    &:active{
        background-color: ${props=> props.background && darken(0.10, props.background)};
    }
`

export const ButtonAdd = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 10px;
    &:first-child{
        &:active{
            box-shadow: 0px 0px 20px rgba(139, 139, 138, 0.938);
        }
    }
`

export const ButtonClose = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    margin: 10px;
    &:first-child{
        &:active{
            box-shadow: 0px 0px 20px rgba(139, 139, 138, 0.938);
        }
    }
`

export const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 99;
    transition: .5s;
    background-color: rgba(0, 0, 0, 0.815);
`
export const Cards = styled.div` 
    display: flex;
    border: 1px ridge black;
    border-radius: 10px;
    min-height: 200px;
    width: 150px;
    margin: 10px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: .1s;
    background-color: ${props => props.background};
    &:hover{
        background-color: #fff;
        box-shadow: 0px 0px 20px rgba(139, 139, 138, 0.938); 
        transition: .1s
    }
`

export const Img= styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%
`
