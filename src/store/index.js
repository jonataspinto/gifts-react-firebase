import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import giftedReducer from './gifted/gifted.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  example: () => [],
  // theme: ()=>{},
  giftedReducer: giftedReducer,
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store;
