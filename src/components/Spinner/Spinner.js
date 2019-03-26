import React, { Component } from 'react';

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
        <div>
          
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Spinner;