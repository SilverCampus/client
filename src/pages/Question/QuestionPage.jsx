import React from 'react';
import styled from 'styled-components';
import QuestionUnderline from '../../components/atoms/QuestionUnderline';

const QuestionPage = () => {
  return (
    <QuestionPageContainer>
      <QuestionPageDiv>
        <QuestionHeader>
          <QuestionPageTitle>Q&A 게시판</QuestionPageTitle>
          <VerticalLine>|</VerticalLine>
          <QuestionCourseTitle>
            비전공자도 쉽게 써먹는 실무 활용 SQL
          </QuestionCourseTitle>
        </QuestionHeader>
        <QuestionUnderline width="190px"></QuestionUnderline>
        <QuestionSection>
          <QuestionTitle>4강 관련 질문입니다.</QuestionTitle>
          <QuestionUser>김아무개</QuestionUser>
          <Question>
            4강에서 어떤 걸 설명하셨는데 그게 이렇고 저런 게 맞나요?
          </Question>
        </QuestionSection>
        <AnswerWriteContainer>
          <QuestionUnderline width="190px"></QuestionUnderline>
          <AnswerInput placeholder="답변 입력"></AnswerInput>
          <AnswerSubmit>전송</AnswerSubmit>
        </AnswerWriteContainer>
        <QuestionUnderline width="840px"></QuestionUnderline>
        <AnswerContainer>
          <AnswerTitle>
            <AnswerUser>김경수</AnswerUser>
            강의자의 답변
          </AnswerTitle>
          <AnswerDiv>네 맞습니다! 아주 잘 학습하고 계시네요 ^^</AnswerDiv>
        </AnswerContainer>
      </QuestionPageDiv>
    </QuestionPageContainer>
  );
};

const QuestionPageContainer = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

const QuestionPageDiv = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 10px 150px;
  font-family: SUITE-Regular;
  font-size: 20px;
  font-weight: 500;
  color: #1c1c1c;
  font-style: normal;
  line-height: normal;
`;

const QuestionHeader = styled.div`
  width: 840px;
  color: #078ca3;
  padding: 10px 0;
  margin-bottom: 25px;
`;

const QuestionPageTitle = styled.span`
  font-weight: 700;
`;

const VerticalLine = styled.span`
  margin: 0 8px;
`;

const QuestionCourseTitle = styled.span`
  font-weight: 500;
`;

const QuestionSection = styled.div`
  margin-top: 25px;
`;

const QuestionTitle = styled.div`
  color: #322653;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 0;
`;

const QuestionUser = styled.div`
  font-size: 20px;
`;

const Question = styled.div`
  margin: 30px 0 120px 0;
  padding: 20px 0;
  font-size: 25px;
`;

const AnswerContainer = styled.div`
  margin-top: 50px;
`;

const AnswerWriteContainer = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 50px;
`;

const AnswerInput = styled.textarea`
  width: 839px;
  height: 104px;
  padding: 15px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
  margin-top: 80px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const AnswerSubmit = styled.button`
  display: inline-flex;
  margin-top: 10px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border-radius: 9px;
  border-bottom: 3px solid #b0b0b0;
  background: #078ca3;

  &:hover {
    background-color: #71bdc9;
    cursor: pointer;
  }
`;

const AnswerTitle = styled.div`
  padding: 5px 0;
  color: #078ca3;
  font-weight: 500;
`;

const AnswerUser = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

const AnswerDiv = styled.span`
  font-size: 25px;
  padding: 8px 0;
`;

export default QuestionPage;
