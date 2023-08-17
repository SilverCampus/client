import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { brand_blue } from '../../utils/palette';

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse={true}
        className="fa-6x"
        style={{ color: brand_blue }}
      />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default LoadingPage;
