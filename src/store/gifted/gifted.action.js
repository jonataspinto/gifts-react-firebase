import { GIFTED_TYPES } from '../actionTypes';
import { firebase } from '../../services/Firebase'

const TYPES = GIFTED_TYPES;

export const getAll = () => async dispatch => {
  dispatch({
    type: TYPES.GET_ALL_GIFTED,
    loading: true,
  })

  try {
    firebase
    .database()
    .ref("gifted")
    .on("value", snapshot => {
      let data = snapshot.val();
      console.log(data)
      dispatch({
        loading: false,
        type: TYPES.GET_ALL_GIFTED_SUCCESS,
        gifteds: Object.keys(data).map(key => data[key] = {...data[key], key}),
      })
    });
    
  } catch (error) {
    dispatch({
      loading: false,
      message: error
    })
  }
} 