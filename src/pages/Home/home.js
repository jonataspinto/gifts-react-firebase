import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {Button} from "../../components/elements";
// import Input from '../../components/Input/input'
// import Card from '../../components/Card'
// import Modal from '../../components/Modal'
import { HomeContainer } from "./styles";
import { getAll } from '../../store/gifted/gifted.action';

const Home = props => {
  const [user, setUser] = useState({
    displayName: localStorage.getItem("displayName"),
    photoURL: localStorage.getItem("photoURL")
  })

  const [modalWin, setModalWin] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll());
  }, [])

  const toggleModal = () => {
    setModalWin(!modalWin);
  };

  return (
    <HomeContainer>
      {user.displayName ? (
        <Button
          value={"Criar Lista"}
          fontSize="18px"
          backgroundBtn="#bababa"
          to={{ pathname: "/gifted" }}
          //    action={()=>{this.loginSocial()}}
        />
      ) : (
        <Button
          value={"Ver Listas"}
          fontSize="18px"
          backgroundBtn="#bababa"
          to={{ pathname: "/gifted" }}
          //    action={()=>{this.loginSocial()}}
        ></Button>
      )}
    </HomeContainer>
  );
};

export default Home;
