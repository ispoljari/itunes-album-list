import styled from 'styled-components';

const ColumnStyled = styled.div`
  flex: auto;
  padding: 0 1.041666%;

  flex-basis: ${props => {
    if (props.xs) {
      return props.xs/12*100 + '%'
    } else {
      return '100%'
    }
  }};

  margin-bottom: 10px;

  @media (min-width: 576px) {
    flex-basis: ${props => {
      if (props.sm) {
        return props.sm/12*100 + '%'
      }
    }}
  }
`;

export default ColumnStyled;