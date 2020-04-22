import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@material-ui/core';
import GiftedUser from '../../models/Gifted';
import { insert, getAll } from '../../store/gifted/gifted.action';
import { Button, Input, Card, Loading } from '../../components/elements';
import { Modal } from '../../components/modules';
import { GiftedPage, ButtonAdd, Img } from './styles';
import { Lang } from '../../assets/constants/pt';

const Gifted = () => {
  const [items, setItems] = useState([]);
  const [modalWin, setModalWin] = useState(false);
  const [user, setUser] = useState(new GiftedUser());
  const { gifteds, loading, message } = useSelector(
    (state) => state.giftedReducer
  );
  const [newUser, setNewUser] = useState(new GiftedUser());

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    dispatch(getAll());
  }, [message]);

  const toggleModal = () => {
    setModalWin(!modalWin);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
    console.log(newUser);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(insert(newUser));
    toggleModal();
  };

  return (
    <GiftedPage>
      {' '}
      {loading ? (
        <Loading />
      ) : (
        gifteds &&
        gifteds.map((gifted) => {
          return (
            gifted.name && (
              <Card
                key={gifted.key}
                imgSrc={gifted.imgSrc}
                value={gifted.name}
                fontSize="18px"
                to={{ pathname: '/giftlist', state: { giftedKey: gifted.key } }}
                action
              />
            )
          );
        })
      )}
      <Modal showModal={modalWin} toggleModal={toggleModal}>
        <h1>
          {user.name ? `${Lang.hello},  ${user.name}` : Lang.welcomeGifted}
        </h1>
        {user.imgSrc && <Img imgSrc={user.imgSrc} />}

        {!user.name && (
          <>
            <Input type="text" name="name" onChange={onChange} />

            <br />

            <Input type="text" name="imgSrc" onChange={onChange} />
          </>
        )}

        <Button
          action={onSubmit}
          value={Lang.create}
          fontSize="18px"
          backgroundBtn="#bababa"
        />
      </Modal>
      {loading || (
        <ButtonAdd onClick={toggleModal}>
          <Icon
            className="fa fa-plus-circle"
            style={{ fontSize: 60, color: 'action' }}
          >
            add_circle
          </Icon>
        </ButtonAdd>
      )}
    </GiftedPage>
  );
};

export default Gifted;
