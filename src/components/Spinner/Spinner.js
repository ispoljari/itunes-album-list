import React, { Component } from 'react';

import Loader from './Spinner.styled';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.hasOwnProperty('show') ? this.props.show: false
    };
  }

  render() {
    const { show } = this.props;
    return show ? <Loader /> : null
  }
};

export default Spinner;