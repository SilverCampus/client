import styled from 'styled-components';

const Logo = () => {
  return <LogoContainer>Im Logo</LogoContainer>;
};

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px 20px;
  font:
    30px Impact,
    Haettenschweiler,
    'Arial Narrow Bold',
    sans-serif;
  color: #fff;
  // border: 10px solid white;
  border-radius: 30px;
`;

export default Logo;
