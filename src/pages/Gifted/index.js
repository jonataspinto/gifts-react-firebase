import React, { Component } from "react";
import { firebase } from "../../services/Firebase/index.js";
import Gifted from "../../models/Gifted";
import Button from "../../components/Button";
import Input from "../../components/Input/input";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
import { GiftedPage, ButtonAdd, Img } from "./styles";
import { Icon } from "@material-ui/core";
import { Lang } from "../../assets/constants/pt";
// import {userAuthenticated} from '../../auth'

export default class GiftedContainer extends Component {
  state = {
    items: [],
    gifteds: Gifted,
    gifted: new Gifted(),
    modalWin: false,
    loading: true,
    name: "",
    user: new Gifted()
  };

  async componentDidMount() {
    // userAuthenticated()
    firebase
      .database()
      .ref("gifted")
      .on("value", snapshot => {
        let res = snapshot.val();
        this.setState({ gifteds: res, loading: false });
      });

    const user = Object.assign({}, this.state.user);
    user["name"] = localStorage.getItem("displayName");
    user["imgSrc"] =
      localStorage.getItem("photoURL") + "?type=square&width=120&height=120";
    await this.setState({ user: user });
    await console.log(this.state.user);
  }

  toggleModal() {
    this.setState({ modalWin: !this.state.modalWin });
  }

  onChange = event => {
    const gifted = Object.assign({}, this.state.gifted);
    const input = event.target.name;
    gifted[input] = event.target.value;
    this.setState({ gifted: gifted });
  };

  onSubmit = event => {
    event.preventDefault();
    this.insertGifted();
    this.toggleModal();
  };

  insertGifted() {
    const send = this.state.user.name ? this.state.user : this.state.gifted;
    firebase
      .database()
      .ref("gifted")
      .push(send);
  }

  render() {
    const { gifteds, gifted, modalWin, loading, user } = this.state;
    return (
      <GiftedPage>
        {" "}
        {loading ? (
          <Loading />
        ) : (
          Object.keys(gifteds).map(key => {
            return (
              gifteds[key].name && (
                <Card
                  imgSrc={gifteds[key].imgSrc}
                  value={gifteds[key].name}
                  fontSize="18px"
                  to={{ pathname: "/giftlist", state: { giftedKey: key } }}
                />
              )
            );
          })
        )}
        <Modal showModal={modalWin} toggleModal={() => this.toggleModal()}>
          <h1>
            {user.name ? `${Lang.hello},  ${user.name}` : Lang.welcomeGifted}
          </h1>
          {user.imgSrc && <Img imgSrc={user.imgSrc} />}

          {!user.name && (
            <>
              <Input
                type="text"
                name="name"
                value={gifted.name}
                onChange={this.onChange}
              />

              <br />

              <Input
                type="text"
                name="imgSrc"
                value={gifted.imgSrc}
                onChange={this.onChange}
              />
            </>
          )}

          <Button
            action={this.onSubmit}
            value={Lang.create}
            fontSize={"18px"}
            backgroundBtn={"#bababa"}
          />
        </Modal>
        {loading || (
          <ButtonAdd
            onClick={() => {
              this.toggleModal();
            }}
          >
            <Icon
              className={"fa fa-plus-circle"}
              style={{ fontSize: 60, color: "action" }}
            >
              add_circle
            </Icon>
          </ButtonAdd>
        )}
      </GiftedPage>
    );
  }
}
