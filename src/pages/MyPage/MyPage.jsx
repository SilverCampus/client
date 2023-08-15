import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import CourseCard from '../Main/CourseCard';

const MyPage = () => {
  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      <Space height="175px" />
      <Heading children="닉네임님의 페이지" />
      <MyUnderline />
      <Space height="100px" />
      <Heading children="구매한 강의" />
      <MyUnderline />

      <Space height="100px" />
      <Flex direction="row" gap="40px">
        {data.map((it) => (
          <CourseCard
            key={it.id}
            id={it.id}
            title={it.title}
            description={it.description}
          />
        ))}
      </Flex>
      <Heading children="찜한 강의" />
      <MyUnderline />
      <Space height="100px" />
      <Flex direction="row" gap="40px">
        {data.map((it) => (
          <CourseCard
            key={it.id}
            id={it.id}
            title={it.title}
            description={it.description}
          />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default MyPage;
