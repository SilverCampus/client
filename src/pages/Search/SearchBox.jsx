import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { brand_white } from '../../utils/palette';
import { useNavigate } from 'react-router-dom';

// Imported Components
import Flex from '../../components/atoms/Flex';

const SearchBox = ({ width }) => {
  const [input, setInput] = useState('');
  const nav = useNavigate(null);

  const handleEnter = (e) => {
    if (e.key !== 'Enter') return;
    nav(`/main?search=${input}`);
  };

  return (
    <>
      <SearchBoxContainer width={width}>
        <Flex direction="row">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-5x"
            style={{ color: `${brand_white}` }}
          />
          <StyledInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
          />
        </Flex>
        <BoldUnderline />
      </SearchBoxContainer>
    </>
  );
};

const SearchBoxContainer = styled.div`
  margin: 0 auto;
  width: ${({ width }) => width};
`;

const BoldUnderline = styled.div`
  width: 100%;
  height: 1px;

  margin: 35px auto;
  border: 6px solid ${brand_white};
  border-radius: 999px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  outline: none;

  text-indent: 30px;
  color: ${brand_white};
  font-size: 60px;
  font-family: 'SUITE-Regular';
  font-weight: 300;

  &::placeholder {
  }
`;

export default SearchBox;
