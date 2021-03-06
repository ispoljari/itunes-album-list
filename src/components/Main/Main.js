import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Albums, LoadMore, Modal } from '../index';
import { Row, Column, Box } from '../../layout';
import { P } from '../../common';
import { Spinner } from '../';

class Main extends Component {
  state = {
    modalOpen: false,
    modalAlbum: {},
    transClosing: false,
    transStarting: false
  };

  handleClose = () => {
    this.setState({
      modalOpen: false,
      transClosing: true
    }, () => {
      setTimeout(() => {
        this.setState({
          transClosing: false
        });
      }, 500)
    });
  };

  openModal = albumJSON => {
    const album = JSON.parse(albumJSON);

    this.setState({
      modalAlbum: {
        ...album
      }
    }, () => {
      this.setState({
        modalOpen: true,
        transStarting: true
      });

      setTimeout(() => {
        this.setState({
          transStarting: false
        })
      }, 500)
    });
  };

  render() {
    const { albums, loading, error, onClick, filterWords } = this.props;
    const { modalOpen, modalAlbum, transClosing, transStarting } = this.state;
    
    return (
      <Box
        as="main"
        role="main"
        px="10px"
        py="20px"
        backgroundColor="#f7f7f7"
        borderRadius="5px"
      >
        <Row>
          <Column>
            <P
              light
            >
              All
            </P>
          </Column>
        </Row>
        <Row
          mt="20px"
        >
          <Albums 
            albums={albums}
            filterWords={filterWords}
            error={error}
            showMoreInfo={albumJSON => this.openModal(albumJSON)}
          />
          <Modal
            show={modalOpen}
            transClosing={transClosing}
            transStarting={transStarting}
            handleClose={this.handleClose}
            modalAlbum={modalAlbum}
            width="95%"
            maxWidth="700px"
            background="white"
            px={{xs: "10px", sm: "20px"}}
            py={{xs: "10px", sm: "20px"}}
            borderRadius="5px"
          />
        </Row>
        <Row
          mt="10px"
        >
          {(error || loading || filterWords.length>0) ? null : 
            <LoadMore 
              onClick={onClick}
            />
          }
          <Spinner
            show={loading}
          />
        </Row>
      </Box>
    )
  }
};

Main.propTypes = {
  albums: PropTypes.instanceOf(Object),
  filterWords: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  onClick: PropTypes.func.isRequired
};

Main.defaultProps = {
  albums: {},
  filterWords: '',
  error: null
};

export default Main;