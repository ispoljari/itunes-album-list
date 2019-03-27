import React, { Component } from 'react';

import  { Button } from './ScrollToTop.styled';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = {
      visible: false
    }
  };

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
    this.buttonRef.current.blur();
  }

  render() {
    const { visible } = this.state;

    return (
      <Button 
        onClick={this.scrollToTop}
        visible={visible}
        ref={this.buttonRef}

      >
        <i></i>
      </Button>
    );
  }
};

export default ScrollToTop;