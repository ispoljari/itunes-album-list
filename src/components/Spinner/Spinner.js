import React, { Component } from 'react';

import Loader from './Spinner.styled';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.hasOwnProperty('show') ? true: false
    };
  }

  render() {
    const { show } = this.props;
    if (show) {
      return (
        <Loader />
      );
    } else {
      return null;
    }
  }
};

export default Spinner;