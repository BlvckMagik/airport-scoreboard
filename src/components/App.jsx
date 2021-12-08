import React from 'react';
import { Provider } from 'react-redux';
import Page from './Page.jsx';
import store from '../store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
