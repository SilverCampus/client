import styled from 'styled-components';
import { brand_white } from '../../utils/palette';

const Logo = ({ color = brand_white }) => {
  return <LogoContainer color={color}>Logo</LogoContainer>;
};

const LogoContainer = styled.div`
  width: 100%;
  height: auto;

  margin-top: 20px;
  margin-left: 20px;

  font:
    30px Impact,
    Haettenschweiler,
    'Arial Narrow Bold',
    sans-serif;
  color: ${({ color }) => color};
`;

export default Logo;
