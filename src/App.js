// eslint-disable-next-line react/prefer-stateless-function

import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
