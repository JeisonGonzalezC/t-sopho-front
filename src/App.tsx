import React from 'react';
import { Provider } from 'react-redux';
import Landing from './components/Landing';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <Landing/>
    </Provider>
  );
}

export default App;
