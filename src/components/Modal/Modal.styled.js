import styled from 'styled-components';
import { Box } from '../../layout/';

export const Animate = styled(Box)`
  visibility: ${props => (props.show || props.transClosing) ? 'visible' : 'hidden'};
  z-index: ${props => (props.show || props.transClosing) ? '100' : '-100'};

  opacity: ${props => props.show ? '1' : '0'};
  background-color: ${props => props.show ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'}; 
  transition: background-color 0.5s ease, opacity 0.5s ease;

  div:first-child {
    opacity: ${props => props.show && !props.transStarting ? '1' : '0'};
    transition: opacity 0.5s ease;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: inherit;
  cursor: pointer;
`;

export const Link = styled.a`
  color: inherit;
`;