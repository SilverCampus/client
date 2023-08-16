import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import {
  faLocationArrow,
  faMagnifyingGlass,
  faUser,
  faUsers,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
} from '@fortawesome/free-solid-svg-icons';

// Imported Components
import FlatButton from '../molecules/FlatButton';
import Space from '../atoms/Space';

import {
  brand_darkblue,
  brand_darkpurple,
  brand_purple,
  brand_white,
} from '../../utils/palette';

const StyledButton = ({ icon, onClick }) => {
  return (
    <FlatButton
      width="60px"
      height="60px"
      bgColor={brand_white}
      className={'fa-2x'}
      children={
        <FontAwesomeIcon icon={icon} style={{ color: 'rgb(89 64 161)' }} />
      }
      onClick={onClick}
    />
  );
};

const Navigation = () => {
  const [isClicked, setClick] = React.useState(false);
  const nav = useNavigate();

  return (
    <StyledNav className={isClicked ? 'isClicked' : ''}>
      {isClicked ? (
        <LinkButtons>
          <Space height="10px" />
          <Link
            to="section3"
            smooth={true}
            duration={500}
            children={<StyledButton icon={faDiceThree} />}
          />
          <Link
            to="section2"
            smooth={true}
            duration={500}
            children={<StyledButton icon={faDiceTwo} />}
          />
          <Link
            to="section1"
            smooth={true}
            duration={500}
            children={<StyledButton icon={faDiceOne} />}
          />
          <Space height="30px" />
          <StyledButton onClick={() => nav('/')} icon={faUsers} />
          <StyledButton onClick={() => nav('/mypage')} icon={faUser} />
          <StyledButton
            onClick={() => nav('/search')}
            icon={faMagnifyingGlass}
          />
        </LinkButtons>
      ) : null}
      <NavButton
        children={<FontAwesomeIcon className="fa-3x" icon={faLocationArrow} />}
        onClick={() => setClick(!isClicked)}
        className={isClicked ? 'isClicked' : ''}
      />
    </StyledNav>
  );
};

const LinkButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
  margin: 20px 0;
`;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 50px;
  right: 50px;

  overflow: hidden;
  border-radius: 10px;

  &.isClicked {
    display: flex;
    flex-direction: column;
    justify-content: end;

    width: fit-content;
    background-color: ${brand_purple};
    animation: expand 0.5s linear forwards;
  }

  @keyframes expand {
    0% {
      max-height: 90px;
    }
    100% {
      max-height: 100%;
    }
  }
`;

const NavButton = styled.button`
  padding: 25px 25px 20px;
  border-bottom: 5px solid ${brand_darkpurple};
  border-radius: 10px;

  color: ${brand_white};
  background-color: ${brand_purple};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &.isClicked {
    box-shadow: none;
    border-bottom: none;
    animation: rotate 0.5s linear forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

export default Navigation;
