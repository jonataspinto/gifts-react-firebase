import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyled';
import { firebase } from '../../../services/Firebase';
import { Button, Typography } from '../../elements';
import { logOutFacebook } from '../../../services/auth';

const Header = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userStatus => {
      // console.log(user)
      if (userStatus) {
        setUser(userStatus.displayName);
      }
    });
  });

  return (
    <S.Header>
      <Typography type="subtitle">Ola, {user}</Typography>
      <Button action={() => user && logOutFacebook()}>
        <Link to={!user && '/login'}>{user ? 'Logout' : 'Login'}</Link>
      </Button>
      {/* <Touchable action></Touchable> */}
    </S.Header>
  );
};

export default Header;
