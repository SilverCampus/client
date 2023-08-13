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
`;

export default GoDown;
