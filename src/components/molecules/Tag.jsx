import styled from 'styled-components';
import Text from '../atoms/Text';
import { brand_blue, brand_white } from '../../utils/palette';

const TagLists = {
  학점2: '#9ACD32',
  학점3: '#FFA500',
  학점5: '#FF0000',
  운동: '#FF6B00',
  건강: '#FFC0CB',
  음악: '#87CEEB',
  미술: '#800080',
  사회: '#A52A2A',
  법: '#000',
  인문: '#FFD600',
  외국어: '#008000',
  완료: brand_blue,
};

const Tag = ({ type, text = type }) => {
  return (
    <TagContainer bgColor={TagLists[type]}>
      <Text children={text} color={brand_white} weight={700} size="14px" />
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  padding-top: 5px;
  height: 30px;
  border-radius: 17px;

  background-color: ${({ bgColor }) => bgColor};
`;

export default Tag;
