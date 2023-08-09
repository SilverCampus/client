import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate(null);

  const goSearch = () => nav('/search');
  const goMyPage = () => nav('mypage');

  return (
    <HeaderContainer>
      Header Area
      <button onClick={goSearch}>SearchPage</button>
      <button onClick={goMyPage}>MyPage</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  background-color: red;
`;

export default Header;
