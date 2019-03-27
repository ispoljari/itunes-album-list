import React, { Component } from 'react';

import { Box } from '../../common';

class ScrollToTop extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollBtnVisibility);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollBtnVisibility);    
  };

  handleScrollBtnVisibility = () => {
    if (window.pageYOffset > 50) {
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        visible: false
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    const { visible } = this.state;

    return (
      <React.Fragment>
        {visible ? (<Box><button>Scroll</button></Box>) : null}
       </React.Fragment>
    );
  }
};

export default ScrollToTop;