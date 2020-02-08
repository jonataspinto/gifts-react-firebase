import styled from 'styled-components';

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