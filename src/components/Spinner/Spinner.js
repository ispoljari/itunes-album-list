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
    const { show, children } = this.props;
    if (show) {
      return (
        <Loader />
      );
    } else {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      );
    }
  }
};

export default Spinner;