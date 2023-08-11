import styled from 'styled-components';
import { brand_white } from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Logo = ({ color = brand_white, height }) => {
  return (
    <LogoContainer color={color} height={height}>
      <FontAwesomeIcon icon={faGraduationCap} />
      Silver Campus
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: fit-content;
  height: ${({ height }) => height};

  margin-top: 20px;
  margin-left: 20px;

  font:
    30px 'Keania One',
    cursive;
  color: ${({ color }) => color};
`;

export default Logo;
