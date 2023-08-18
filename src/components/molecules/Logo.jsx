import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo_Bright from '../../assets/images/Logo_Bright.png';
import Logo_Dark from '../../assets/images/Logo_Dark.png';

const Logo = ({ type = 'bright', height, className, disable }) => {
  const nav = useNavigate(null);

  return (
    <LogoContainer
      height={height}
      className={className}
      onClick={() => (disable ? null : nav('/search'))}
    >
      {type === 'bright' ? (
        <StyledImg src={Logo_Bright} />
      ) : (
        <StyledImg src={Logo_Dark} />
      )}
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: fit-content;
  height: ${({ height }) => height};
  cursor: pointer;
`;

const StyledImg = styled.img`
  height: 100%;
`;

export default Logo;
