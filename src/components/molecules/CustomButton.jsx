import styled from 'styled-components';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';

const CustomButton = ({
  bgColor,
  color,
  darkColor,
  icon,
  isActive,
  children,
}) => {
  return (
    <CustomButtonContainer
      color={color}
      bgColor={bgColor}
      darkColor={darkColor}
    >
      <Flex direction="row" width="auto" height="auto" gap="8px">
        {icon}
        <Text size={20} weight={700} children={children} />
      </Flex>
    </CustomButtonContainer>
  );
};

const CustomButtonContainer = styled.button`
  padding: 10px 30px 10px; 26px;
  border-radius: 10px;
  border-bottom: 5px solid ${({ darkColor }) => darkColor};

  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 0px 16px 0px rgba(163, 159, 159, 0.5);
  cursor: pointer;

  &:active {
    color: ${({ bgColor }) => bgColor};
    background-color: ${({ color }) => color};
    border-top: 5px solid #98b1b5;
    border-bottom: none;
    box-shadow: 0px 0px 8px 0px #a39f9f inset;
  }
`;

export default CustomButton;
