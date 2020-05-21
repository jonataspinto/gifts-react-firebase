import { GIFTED_TYPES } from '../actionTypes';
import { api } from '../../services';

const TYPES = GIFTED_TYPES;

export const getAll = () => async dispatch => {
  dispatch({
    type: TYPES.GET_ALL_GIFTED,
    loading: true,
  });

  try {
    const data = await api.get();
    dispatch({
      loading: false,
      type: TYPES.GET_ALL_GIFTED_SUCCESS,
      gifteds: data,
    });
  } catch (error) {
    dispatch({
      loading: false,
      message: error,
    });
  }
};

export const insert = newGifted => async dispatch => {
  dispatch({
    type: TYPES.INSERT_NEW_GIFTED,
    loading: true,
  });

  try {
    api.insertGifted(newGifted);
    dispatch(
      {
        type: TYPES.INSERT_NEW_GIFTED_SUCCESS,
        loading: false,
        message: 'Lista criada',
      },
      getAll()
    );
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_NEW_GIFTED_FAIL,
      loading: false,
      message: error,
    });
  }
};

export const remove = key => async () => {
  api.removeGifted(key);
};
