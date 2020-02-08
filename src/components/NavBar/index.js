import React, {useState, useEffect} from 'react';
import {Navbar} from './styles'
import {firebase} from '../../services/Firebase/index.js'
import Button from '../../components/Button'
import {logOutFacebook} from '../../services/auth'


const Nav = (props) =>{
  const [user, setUser] = useState(
    ''
  );

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=> {  
      // console.log(user)      
      if (user) {
        setUser(user.displayName)
      }
    });
  })

  
  return (
    <Navbar>
      <ul>
        <li><h3>Ola, {user}</h3></li>
        <li>
        {window.location.pathname !== '/login' && <Button
          action={()=>{ user && logOutFacebook()}} 
          value={
            user? "Logout" : "Login"
          } 
          to={!user && {pathname:"/login"}}
          fontSize={"18px"} 
          backgroundBtn={"#bababa"}
        />}

        </li>
      </ul>
    </Navbar>
  );
}

export default Nav