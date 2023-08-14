import styled from 'styled-components';
import { brand_black, brand_blue, brand_white } from '../../utils/palette';

// Imported Components
import Wrapper from '../../components/atoms/Wrapper';
import Text from '../../components/atoms/Text';
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import { FixedLogo } from '../Search/SearchSection';
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import FlatButton from '../../components/molecules/FlatButton';

const Comments = () => {
  return (
    <>
      <Flex align="left" gap="10px">
        <div>
          <Text
            color={brand_blue}
            size="20px"
            weight={700}
            children="김경수 "
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
          children="네 정답입니다"
        />
      </Flex>
      <Space height="50px" />
    </>
  );
};

const QuestionPage = () => {
  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      <QuestionSection>
        <Space height="175px" />
        <Flex justify="left" direction="row" gap="10px">
          <Text
            color={brand_blue}
            size="25px"
            weight={700}
            children="Q&A 게시판 】"
          />
          <Text
            color={brand_blue}
            size="25px"
            weight={500}
            children="비전공자도 쉽게 써먹는 실무 활용 SQL"
          />
        </Flex>
        <Space height="50px" />
        <CustomHeading size="55px" children="4강 관련 질문입니다." />
        <Space height="10px" />
        <CustomHeading2 size="20px" children="김아무개" />
        <Space height="50px" />
        <CustomHeading2
          size="25px"
          children="4강에서 어떤 걸 설명하셨는데 그게 이렇고 저런 게 맞나요?"
        />
        <CustomUnderline width="160px" color={brand_black} />
        <Flex align="end" gap="10px">
          <AnswerInput placeholder="답변 입력"></AnswerInput>
          <FlatButton bgColor={brand_blue} width="60px" height="40px">
            <Text
              weight={700}
              size="15px"
              color={brand_white}
              children="전송"
            />
          </FlatButton>
        </Flex>
        <CustomUnderline width="100%" color={brand_black} />

        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </QuestionSection>
    </Wrapper>
  );
};

const QuestionSection = styled.div`
  width: 850px;
  color: ${brand_black};
  margin: 0 auto;
`;

const CustomHeading = styled(Heading)`
  text-align: left;
`;

const CustomHeading2 = styled(Heading2)`
  text-align: left;
`;

const CustomUnderline = styled(MyUnderline)`
  width: ${({ width }) => width};
  height: 0;
  border: none;
  border-bottom: 1px solid ${({ color }) => color};
  margin: 50px 0 50px auto;
`;

const AnswerInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default QuestionPage;
