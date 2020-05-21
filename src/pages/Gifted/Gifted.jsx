import React, { useState, useEffect } from 'react';
import * as S from './GiftedStyled';
import { useDispatch, useSelector } from 'react-redux';
import GiftedUser from '../../models/Gifted';
import { getAll } from '../../store/gifted/gifted.action';
import { Button, Input, Card, Image } from '../../components/elements';
import { Modal } from '../../components/modules';

const Gifted = () => {
  // const [modalWin, setModalWin] = useState(false);
  const { gifteds, loading } = useSelector(state => state.giftedReducer);
  // const [newUser, setNewUser] = useState(new GiftedUser());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  // useEffect(() => {
  //   dispatch(getAll());
  // }, [dispatch, message]);

  // const toggleModal = () => {
  //   setModalWin(!modalWin);
  // };

  // const onChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewUser({ ...newUser, [name]: value });
  //   console.log(newUser);
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(insert(newUser));
  //   toggleModal();
  // };

  return (
    <S.Container>
      {gifteds && console.log(gifteds)}
      {gifteds &&
        gifteds.map(gifted => (
          <Card key={gifted.key}>
            <Image imgSrc={gifted.imgSrc} imgTitle={gifted.name} width={50} rounded/>
            {/* to={{ pathname: '/giftlist', state: { giftedKey: gifted.key } }} */}
          </Card>
        ))}
    </S.Container>
  );
};

export default Gifted;
