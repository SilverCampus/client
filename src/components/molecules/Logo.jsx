import styled from 'styled-components';

const Logo = () => {
  return <LogoContainer>Logo</LogoContainer>;
};

const LogoContainer = styled.div`
  width: fit-content;
  height: auto;

  margin-top: 20px;
  margin-left: 20px;

  font:
    30px Impact,
    Haettenschweiler,
    'Arial Narrow Bold',
    sans-serif;
  color: #fff;
`;

export default Logo;
