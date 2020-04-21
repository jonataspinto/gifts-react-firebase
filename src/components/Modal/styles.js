import styled from 'styled-components'

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