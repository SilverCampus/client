import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

// Imported Components
import PopButton from '../molecules/PopButton';

import {
  brand_darkpurple,
  brand_purple,
  brand_white,
} from '../../utils/palette';

const Navigation = () => {
  const [isClicked, setClick] = React.useState(false);
  const colors = {
    color: brand_white,
    bgColor: brand_purple,
    shadowColor: brand_darkpurple,
  };

  return (
    <StyledNav className={isClicked ? 'isClicked' : ''}>
      <NavButton
        children={<FontAwesomeIcon className="fa-2x" icon={faLocationArrow} />}
        onClick={() => setClick(!isClicked)}
        className={isClicked ? 'isClicked' : ''}
      />

      {isClicked ? (
        <>
          <PopButton width="120px" height="35px" colors={colors} />
          <PopButton width="120px" height="35px" colors={colors} />
          <PopButton width="120px" height="35px" colors={colors} />
          <PopButton width="120px" height="35px" colors={colors} />
          <PopButton width="120px" height="35px" colors={colors} />
        </>
      ) : null}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  top: 25px;
  right: 25px;

  &.isClicked {
    display: flex;
    flex-direction: column;

    width: fit-content;
    padding: 20px 20px 15px;
    border-bottom: 5px solid ${brand_darkpurple};
    border-radius: 10px;

    background-color: ${brand_white};
    box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;

  padding: 20px 20px 15px;
  border-radius: 10px;
  border-bottom: 5px solid ${brand_darkpurple};

  color: ${brand_white};
  background-color: ${brand_purple};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &.isClicked {
    color: ${brand_purple};
    background-color: ${brand_white};
    box-shadow: none;
    border-bottom: none;
  }
`;

export default Navigation;
