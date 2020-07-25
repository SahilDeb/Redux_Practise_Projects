import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';
import {
  addCharacterById
} from './actions';

const store = createStore(rootReducer);
store.subscribe(() => console.log(`store.getState()`, store.getState()))
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));