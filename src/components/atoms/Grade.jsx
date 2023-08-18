import React from 'react';
import styled from 'styled-components';

import tier1 from '../../assets/images/티어1_새내기.png';
import tier2 from '../../assets/images/티어2_학부생.png';
import tier3 from '../../assets/images/티어3_학사.png';
import tier4 from '../../assets/images/티어4_석사.png';
import tier5 from '../../assets/images/티어5_박사.png';
import tier6 from '../../assets/images/티어6_교수.png';

const tierList = {
  Freshman: tier1,
  Undergraduate: tier2,
  Bachelor: tier3,
  Master: tier4,
  Doctorate: tier5,
  Professor: tier6,
};

const Grade = ({ type, height }) => {
  return (
    <div>
      <TierImg src={tierList[type]} height={height} />
    </div>
  );
};

const TierImg = styled.img`
  height: ${({ height }) => height};
`;

export default Grade;
