import React from 'react';
import styled from 'styled-components';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';

const CustomButton = ({ width, height, colors, children }) => {
  const [isClicked, setClick] = React.useState(false);

  return (
    <CustomButtonContainer
      width={width}
      height={height}
      colors={colors}
      onClick={() => setClick(!isClicked)}
      className={isClicked ? 'isClicked' : ''}
    >
      <Flex direction="row" width="auto" height="auto" gap="8px">
        {children ? children.map((it) => it) : null}
      </Flex>
    </CustomButtonContainer>
  );
};

const CustomButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  border-bottom: 5px solid ${({ colors }) => colors.shadowColor};

  color: ${({ colors }) => colors.color};
  background-color: ${({ colors }) => colors.bgColor};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &.isClicked {
    color: ${({ colors }) => colors.bgColor};
    background-color: ${({ colors }) => colors.color};
    border-top: 5px solid #98b1b5;
    border-bottom: none;
    box-shadow: 0px 0px 8px 0px #a39f9f inset;
  }
`;

export default CustomButton;
