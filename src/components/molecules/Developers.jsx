import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { brand_white } from '../../utils/palette';

import Flex from '../atoms/Flex';
import Text from '../atoms/Text';

const Developers = ({ type, name, handle }) => {
  const icon = type === 'FE' ? faTv : faServer;
  const text = type === 'FE' ? 'Front-End' : 'Back-End';

  return (
    <DevelopersContainer>
      <IconBox children={<FontAwesomeIcon icon={icon} />} />
      <Flex width="auto" gap="7px" align="left">
        <Text size="16px" children={text} align="left" isCut={true} />
        <Text
          size="16px"
          children={`${name} | ${handle}`}
          align="left"
          isCut={true}
        />
      </Flex>
    </DevelopersContainer>
  );
};

const DevelopersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  width: auto;
  color: ${brand_white};
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid ${brand_white};
  border-radius: 999px;
  width: 45px;
  height: 45px;
`;

export default Developers;
