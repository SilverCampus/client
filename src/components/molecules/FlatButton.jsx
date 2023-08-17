import styled from 'styled-components';
import Flex from '../atoms/Flex';

const FlatButton = ({
  width,
  height,
  bgColor,
  children,
  onClick,
  className,
}) => {
  return (
    <StyledFlatButton
      width={width}
      height={height}
      bgColor={bgColor}
      className={className}
      onClick={onClick}
    >
      <Flex justify="center" align="center">
        {children}
      </Flex>
    </StyledFlatButton>
  );
};

const StyledFlatButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;

  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;

  &:hover {
    filter: brightness(70%);
  }
`;

export default FlatButton;
