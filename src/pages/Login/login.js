import React, {Component}from 'react';
import { LoginContainer } from '../../styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '../../components/Button'
import { Redirect } from 'react-router-dom'
import { LoginFacebook , userAuthenticated} from '../../auth'

export default class Login extends Component{
    // const [user, setUser] = useState(false);

    state={
        user: userAuthenticated()
    }

    render(){
        const {user} = this.state
        return (
            <LoginContainer>
                {user ? <Redirect to={{pathname: '/home'}} />:
   
               <section>
                   <h3>Faça seu Login</h3>
                   <Button
                       action={()=>{LoginFacebook()}}
                       fontSize={"18px"} 
                       backgroundBtn={"#3b5998"}
                       color={'#fff'}
                   > 
                   <FacebookIcon style={{color: '#fff'}} />
                   <h4>Continuar</h4>
                   </Button>
               </section>
   }
           </LoginContainer>
       );
    }
}


