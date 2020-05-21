import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from '../../components/elements';
import { Link } from 'react-router-dom';
import { Button } from 'jp-react-library-test';
import * as S from './HomeStyled';
import { getAll } from '../../store/gifted/gifted.action';

const Home = () => {
  // const [user, setUser] = useState({
  //   displayName: localStorage.getItem('displayName'),
  //   photoURL: localStorage.getItem('photoURL'),
  // });

  // const { gifteds, loading } = useSelector(state => state.giftedReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAll());s
  }, [dispatch]);

  return (
    <S.Home>
      <Button
        action={() => {}}
        //    action={()=>{this.loginSocial()}}
      >
        <Link to="/gifted">Ver Listas</Link>
      </Button>
    </S.Home>
  );
};

export default Home;
