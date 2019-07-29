import './style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider  } from 'react-redux'
import App from './components/App'
import MainApp from './components/MainApp'
import configureStore from './configureStore'

const store = configureStore();
render(
  <Provider store={store}>
    <MainApp />
  </Provider>, 
  document.getElementById('root')
 
);
