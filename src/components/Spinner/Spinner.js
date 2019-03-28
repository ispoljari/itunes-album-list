import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Spinner.styled';

const Spinner = ({ show }) => (
  show ? <Loader /> : null
)

Spinner.propTypes = {
  show: PropTypes.bool
};

Spinner.defaultProps = {
  show: false
};

export default Spinner;