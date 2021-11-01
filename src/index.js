import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/reducers';
import Board from './Board';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Board />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
