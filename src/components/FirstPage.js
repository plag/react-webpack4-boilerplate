import React, { Component } from 'react';
// import styles from './FirstPage.css';
import { Link } from 'react-router-dom';

import ExampleSvg from '~/src/components/icon.svg';
import Svg from '~/src/components/Svg';

import './FirstPage.sass'

class FirstPage extends Component {
  render() {
    return (<div className="firstPage">
      <h2>Test first page</h2>
      <Svg src={ ExampleSvg } />
      <Link to="/second">Go to second</Link>
    </div>);
  }
}

export default FirstPage;
