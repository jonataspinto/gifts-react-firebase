import styled from 'styled-components';
import{ darken, lighten } from 'polished'

const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-height: calc(100vh - 60px);

    flex-wrap: wrap;
`

export const LoginContainer = styled(Container)`
    background-color: ${lighten(0.12, "#d5d5d5")};
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;
        height: 60vh;
        background-color: white;
        box-shadow: 0px 0px 10px rgba(139, 139, 138, 0.938);
        border-radius: 10px;
        h3{
            margin-bottom: 10px ;
        }
    }
`