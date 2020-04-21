import React, { useState } from "react";
import { LoginContainer } from "./styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import {Button} from "../../components/elements";
import { Redirect } from "react-router-dom";
import { LoginFacebook, userAuthenticated } from "../../services/auth";

const Login = () => {
  const [user, setUser] = useState(userAuthenticated());

  return (
    <LoginContainer>
      {user ? (
        <Redirect to={{ pathname: "/home" }} />
      ) : (
        <section>
          <h3>Faça seu Login</h3>
          <Button
            action={() => {
              LoginFacebook();
            }}
            fontSize={"18px"}
            backgroundBtn={"#3b5998"}
            color={"#fff"}
          >
            <FacebookIcon style={{ color: "#fff" }} />
            <h4>Continuar</h4>
          </Button>
        </section>
      )}
    </LoginContainer>
  );
};

export default Login