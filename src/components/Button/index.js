import Proptypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5s;
  }

  &:disabled {
    background-color: #000000;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: Proptypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: Proptypes.node.isRequired,
};

export default Button;
