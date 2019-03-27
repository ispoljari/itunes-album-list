import React, { Component } from 'react';

import  { Button } from './ScrollToTop.styled';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = {
      visible: false,
      clicked: false
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollBtnVisibility);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollBtnVisibility);    
  };

  handleScrollBtnVisibility = () => {
    if (window.pageYOffset > 200) {
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        visible: false
      }, () => {
        setTimeout(() => {
          this.setState({
            clicked: false
          });
        }, 550) // enable hover and focus effects after reaching top of page and fade transition of 500ms is complete
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.setState({
      clicked: true
    });
    this.buttonRef.current.blur();
  }

  render() {
    const { visible, clicked } = this.state;

    return (
      <Button 
        onClick={this.scrollToTop}
        visible={visible}
        clicked={clicked}
        ref={this.buttonRef}
      >
        <i></i>
      </Button>
    );
  }
};

export default ScrollToTop;