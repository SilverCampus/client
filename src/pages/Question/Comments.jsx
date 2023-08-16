import { brand_blue, brand_black } from '../../utils/palette';
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import Space from '../../components/atoms/Space';

const Comments = ({ data }) => {
  return (
    <>
      <Flex align="left" gap="10px">
        <div>
          <Text
            color={brand_blue}
            size="20px"
            weight={700}
            children={`${data.instructor_nickname} `}
          />
          <Text
            color={brand_blue}
            size="20px"
            weight={500}
            children="강의자의 답변"
          />
        </div>
        <Text
          color={brand_black}
          weight={700}
          size="23px"
          children={data.content}
        />
      </Flex>
      <Space height="50px" />
    </>
  );
};

export default Comments;
