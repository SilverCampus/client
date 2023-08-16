import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

import search from '../../assets/audios/Search.mp3';

import {
  brand_darkyellow,
  brand_white,
  brand_yellow,
} from '../../utils/palette';

const Speaker = () => {
  const [isClicked, setClick] = React.useState(true);
  const $audio = useRef();

  const handleClick = () => {
    setClick(!isClicked);
  };

  // 아니 이거 왜 isClicked 바로 안바뀌냐?
  useEffect(() => {
    if (isClicked) $audio.current.pause();
    else $audio.current.play();
  }, [isClicked]);

  return (
    <StyledNav className={isClicked ? 'isClicked' : ''}>
      <NavButton
        children={
          <FontAwesomeIcon
            className="fa-3x"
            icon={isClicked ? faVolumeXmark : faVolumeLow}
          />
        }
        onClick={handleClick}
        className={isClicked ? 'isClicked' : ''}
      />
      <audio
        style={{ display: 'none' }}
        ref={$audio}
        src={search}
        controls={true}
      />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  bottom: 50px;
  left: 50px;

  overflow: hidden;
  border-radius: 10px;
`;

const NavButton = styled.button`
  padding: 25px 25px 20px;
  border-bottom: 5px solid ${brand_darkyellow};
  border-radius: 10px;

  color: ${brand_white};
  background-color: ${brand_yellow};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &.isClicked {
    padding: 25px 20px 20px 20px;
    box-shadow: none;
    border-bottom: none;
  }
`;

export default Speaker;
