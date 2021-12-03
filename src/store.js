import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReduser from './weather/weather.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReduser,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
