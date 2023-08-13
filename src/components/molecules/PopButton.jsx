import React from 'react';
import styled from 'styled-components';
import Flex from '../atoms/Flex';

const PopButton = ({ width, height, colors, className, children }) => {
  return (
    <PopButtonContainer
      width={width}
      height={height}
      colors={colors}
      className={className}
    >
      <Flex direction="row" width="auto" height="auto" gap="8px">
        {children}
      </Flex>
    </PopButtonContainer>
  );
};

const PopButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  border-bottom: 5px solid ${({ colors }) => colors.shadowColor};
  padding-top: 10px;

  color: ${({ colors }) => colors.color};
  background-color: ${({ colors }) => colors.bgColor};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &:active {
    filter: brightness(110%);
    box-shadow: none;
    border-top: 5px solid transparent;
    border-bottom: none;
  }
`;

export default PopButton;
