import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { messages, logs, series } from './reducers';
import thunk from 'redux-thunk';

export default () => {
  const rootReducer = combineReducers({
    messages,
    logs,
    series
  })

  return createStore(rootReducer, applyMiddleware(thunk))
}