import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { Provider } from 'react-redux';

class Layout extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router>
          <div className="app">
            <Route exact path="/" component={ FirstPage } />
            <Route path="/second" component={ SecondPage } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(Layout);



