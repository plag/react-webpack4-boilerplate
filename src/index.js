import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import reducers from './redux/reducers';

import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

let sagaTask = sagaMiddleware.run(sagas);

const render = (Component) => {
  ReactDOM.render(
    <Component store={ store } />,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    const reducers = require('./redux/reducers').default;
    return store.replaceReducer(reducers);
  });

  module.hot.accept('./redux/sagas', () => {
    const newSagas = require('./redux/sagas').default;
    sagaTask.cancel()
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(newSagas);
    })
  })
}




