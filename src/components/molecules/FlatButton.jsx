import styled from 'styled-components';

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
      {children}
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
