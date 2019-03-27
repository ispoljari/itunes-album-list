import React, { Component } from 'react';

import  { Button } from './ScrollToTop.styled';

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
      <Button 
        onClick={this.scrollToTop}
        visible={visible}
      >
        <i></i>
      </Button>
    );
  }
};

export default ScrollToTop;