import React, {useState} from 'react';
import {Navbar} from '../../styles'
import {firebase} from '../../Firebase/index.js'

export default function Nav(props) {
  const [user, setUser] = useState(
    ''
  );

  firebase.auth().onAuthStateChanged((user)=> {        
    if (user) {
      setUser(user.displayName)
    }
  });
  
  return (
    <Navbar>
      <ul>
        <li>Ola, {user}</li>
        <li></li>
      </ul>
    </Navbar>
  );
}
