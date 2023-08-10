import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { brand_white } from '../../style/palette';

// Imported Components
import Flex from '../../components/atoms/Flex';

const SearchBox = () => {
  return (
    <>
      <SearchBoxContainer>
        <Flex direction="row">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-4x"
            style={{ color: `${brand_white}` }}
          />
          <StyledInput />
        </Flex>
        <BoldUnderline />
      </SearchBoxContainer>
    </>
  );
};

const SearchBoxContainer = styled.div`
  margin: 0 auto;
  width: 625px;
`;

const BoldUnderline = styled.div`
  width: 100%;
  height: 1px;

  margin: 20px auto;
  border: 4px solid ${brand_white};
  border-radius: 999px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  outline: none;

  text-indent: 30px;
  font-size: 60px;
  color: ${brand_white};

  &::placeholder {
  }
`;

export default SearchBox;
