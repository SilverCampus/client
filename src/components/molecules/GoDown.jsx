import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Imported Components
import Text from '../atoms/Text';

const GoDown = ({ color, children }) => {
  return (
    <GoDownContainer>
      <Text color={color} children={children} size="24px" weight={700} />
      <FontAwesomeIcon
        className="fa-2x"
        style={{ color: `${color}` }}
        icon={faCaretDown}
      ></FontAwesomeIcon>
    </GoDownContainer>
  );
};

const GoDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  width: fit-content;
  height: auto;

  animation: bounce 3s infinite ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0); /* 높이를 변화시키지 않음 */
    }

    50% {
      transform: translateY(-20px); /* 위로 튀기는 효과 */
    }
  }
`;

export default GoDown;
