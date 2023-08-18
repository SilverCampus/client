import styled from 'styled-components';

const Text = ({
  size = 1,
  weight = 300,
  color = 'inherit',
  children,
  variant,
  as = 'span',
  spacing = '-0px',
  font = 'GmarketSansLight',
  cursor = 'inherit',
  underline = false,
  lineHeight = '120%',
  align = 'inheirt',
  shadow = false,
  white = false,
  blue = false,
  isCut = false,
  className,
  ...rest
}) => {
  let family;
  if (weight === 300) family = 'GmarketSansLight';
  else if (weight === 500) family = 'GmarketSansMedium';
  else if (weight === 700) family = 'GmarketSansBold';

  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      variant={variant}
      as={as}
      spacing={spacing}
      font={family}
      align={align}
      cursor={cursor}
      underline={underline}
      lineHeight={lineHeight}
      shadow={shadow}
      white={white}
      blue={blue}
      isCut={isCut}
      className={className}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  word-wrap: break-all;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  overflow: ${({ isCut }) => (isCut ? 'hidden' : '')};
  text-overflow: ${({ isCut }) => (isCut ? 'ellipsis' : '')};
  display: ${({ isCut }) => (isCut ? '-webkit-box' : '')};
  -webkit-line-clamp: ${({ isCut }) => (isCut ? 1 : '')};
  -webkit-box-orient: ${({ isCut }) => (isCut ? 'vertical' : '')};

  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
`;

export default Text;
