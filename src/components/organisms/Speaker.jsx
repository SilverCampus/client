import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import Home from '../../assets/audios/Home_signup_login.mp3';
import Search from '../../assets/audios/Search.mp3';
import Main from '../../assets/audios/Main.mp3';
import Video from '../../assets/audios/Video.mp3';
import Play from '../../assets/audios/Play.mp3';
import Mypage from '../../assets/audios/Mypage.mp3';

import {
  brand_darkyellow,
  brand_white,
  brand_yellow,
} from '../../utils/palette';

const Speaker = () => {
  const [isClicked, setClick] = React.useState(true);
  const $audio = useRef();

  const path = useLocation();
  let mp3File;
  switch (path) {
    case '/':
      mp3File = Home;
      break;
    case '/search':
      mp3File = Search;
      break;
    case '/main':
      mp3File = Main;
      break;
    case '/mypage':
      mp3File = Mypage;
      break;
    case '/course':
      mp3File = Video;
      break;
    case '/lecture':
      mp3File = Play;
      break;
    default:
      mp3File = Home;
      break;
  }

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
        src={mp3File}
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
