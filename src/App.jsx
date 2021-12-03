import React from 'react';
import { Provider } from 'react-redux';
import Weather from './weather/Weather.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
