import React, {useState}from 'react';
import {firebase} from '../../Firebase/index.js'
import { LoginContainer } from '../../styles'


const Login = ()=> {
    return (
        <LoginContainer>
            
        </LoginContainer>        
    );
}

// const LoginSocial = ()=>{
//     const [user, setUser] = useState(
//         ''
//     );

//     let provider = new firebase.auth.FacebookAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) =>{
//         const user = result.user;
//         console.log(user);
//         setUser({user})
//       })
//       .catch(function(error) {
//         // // Handle Errors here.
//         // var errorCode = error.code;
//         // var errorMessage = error.message;
//         // // The email of the user's account used.
//         // var email = error.email;
//         // // The firebase.auth.AuthCredential type that was used.
//         // var credential = error.credential;
//         // // ...
//     });
// }

export default Login
