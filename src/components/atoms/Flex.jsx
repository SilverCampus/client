import styled from 'styled-components';

const Flex = ({
  children,
  width = '100%',
  height = 'auto',
  direction = 'column',
  justify = 'center',
  align = 'center',
  gap = '0px',
  wrap = 'no-wrap',
}) => {
  return (
    <FlexDiv
      width={width}
      height={height}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      wrap={wrap}
    >
      {children}
    </FlexDiv>
  );
};

const FlexDiv = styled.div`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => wrap};
`;

export default Flex;
