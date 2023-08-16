import styled from 'styled-components';
import { brand_black, brand_blue, brand_white } from '../../utils/palette';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BaseUrl } from '../../App';
import axios from 'axios';

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
import Comments from './Comments';

const QuestionPage = () => {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getQuestionData = async () => {
    let url = BaseUrl + `/api/get-question-detail/?question_id=${id}`;

    try {
      const res = await axios.get(url);
      setQuestionData(res.data);
      setLoading(false);
    } catch (err) {
      console.log('getQuestionDataError : ', err);
    }
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  if (loading) return '로딩중';
  else
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <Space height="175px" />
        <QuestionSection>
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
              children={questionData.course}
            />
          </Flex>
          <Space height="50px" />
          <CustomHeading size="55px" children={questionData.title} />
          <Space height="10px" />
          <CustomHeading2
            size="20px"
            children={questionData.student_nickname}
          />
          <Space height="50px" />
          <CustomHeading2 size="25px" children={questionData.content} />
          <CustomUnderline width="160px" color={brand_black} />
          <Flex align="end" gap="10px">
            <AnswerInput placeholder="답변 입력"></AnswerInput>
            <FlatButton
              bgColor={brand_blue}
              width="60px"
              height="40px"
              children={
                <Text
                  weight={700}
                  size="15px"
                  color={brand_white}
                  children="전송"
                />
              }
            />
          </Flex>
          <CustomUnderline width="100%" color={brand_black} />

          {questionData.comments.map((it, idx) => (
            <Comments key={idx} data={it} />
          ))}
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
