import styled from 'styled-components';
import Logo_Bright from '../../assets/images/Logo_Bright.png';

const Logo = ({ height }) => {
  return (
    <LogoContainer height={height}>
      <StyledImg src={Logo_Bright} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: fit-content;
  height: ${({ height }) => height};
`;

const StyledImg = styled.img`
  height: 100%;
`;

export default Logo;
