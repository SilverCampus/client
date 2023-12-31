import React from 'react';
import styled from 'styled-components';
import Flex from '../atoms/Flex';

const PopButton = ({
  width,
  height,
  colors,
  children,
  className,
  active,
  onClick,
  disabled,
}) => {
  let activeClass = className + (active ? ' isActive' : '');

  return (
    <PopButtonContainer
      width={width}
      height={height}
      colors={colors}
      className={activeClass}
      active={active}
      onClick={onClick}
      disabled={disabled}
    >
      <Flex
        direction="row"
        width="auto"
        height="auto"
        gap="8px"
        children={children}
      />
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

  &:hover {
    filter: brightness(80%);
  }

  &.isActive {
    color: ${({ colors }) => colors.bgColor};
    background-color: ${({ colors }) => colors.color};
    box-shadow: 0px 0px 12px 0px rgba(163, 159, 159, 0.5) inset;

    padding-bottom: 5px;
    padding-top: none;
    border-top: 5px solid #98b1b5;
    border-bottom: none;
    cursor: default;
  }
`;

export default PopButton;
