import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import giftedReducer from './gifted/gifted.reducer';

const reducers = combineReducers({
  example: () => [],
  theme: ()=>{}
});

const store = createStore(
    reducers,
    {},
    applyMiddleware(ReduxThunk)
)

export default store;
