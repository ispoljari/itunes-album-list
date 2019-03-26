import PropTypes from 'prop-types';

import { withLayoutContent } from '../../common/';
import StyledContainer from './Container.styled';

const Container = withLayoutContent(StyledContainer);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    fullWidth: PropTypes.bool
  })
};

Container.defaultProps = {
  styles: {
    fullWidth: false
  }
};

export default Container;