import React, { Component, useState, useEffect } from "react";
// import {firebase}from '../../Firebase/index.js'
import Button from "../../components/Button";
// import Input from '../../components/Input/input'
// import Card from '../../components/Card'
// import Modal from '../../components/Modal'
import { HomeContainer } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../../store/gifted/gifted.action';

const Home = props => {
  const [state, serState] = useState({
    items: [],
    modalWin: false,
    name: "",
    isLogged: false,
    user: {
      displayName: localStorage.getItem("displayName"),
      photoURL: localStorage.getItem("photoURL")
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  })

  const toggleModal = () => {
    this.setState({ modalWin: !this.state.modalWin });
  };

  return (
    <HomeContainer>
      {state.user.displayName ? (
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
