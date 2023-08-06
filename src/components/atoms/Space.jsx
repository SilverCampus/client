import styled from 'styled-components';

const Space = ({ width = '100%', height = '0px' }) => {
  return <SpaceDiv />;
};

const SpaceDiv = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Space;
