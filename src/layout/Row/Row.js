import PropTypes from 'prop-types';

import { withLayoutContent } from '../../common/';
import RowStyled from './Row.styled';

const Row = withLayoutContent(RowStyled);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    pl: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pr: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pb: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    px: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    py: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    ml: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mr: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mb: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mx: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    my: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    wd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    hg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    maxWd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    maxHg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
  })
};

Row.defaultProps = {
  styles: {
    pl: '',
    pr: '',
    pt: '',
    pb: '',
    px: '',
    py: '',
    ml: '',
    mr: '',
    mt: '',
    mb: '',
    mx: '',
    my: '',
    wd: '',
    hg: '',
    maxWd: '',
    maxHg: ''
  }
};

export default Row;