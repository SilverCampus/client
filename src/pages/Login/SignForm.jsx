import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useLoginForm from './useLoginForm';
import {
  brand_black,
  brand_white,
  brand_purple,
  brand_darkpurple,
} from '../../utils/palette';

// Imported Components
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import PopButton from '../../components/molecules/PopButton';
import Space from '../../components/atoms/Space';

// Imported Functions
import { onRegister } from './signInUp';

const ButtonColors = {
  color: brand_white,
  bgColor: brand_purple,
  shadowColor: brand_darkpurple,
};

const TypeTexts = {
  login: {
    submit: '로그인',
  },
  userSignUp: {
    submit: '사용자 가입',
  },
  instructorSignUp: {
    submit: '강의자 가입',
  },
};

const SignForm = () => {
  const [signState, setState] = useState('login');

  const nav = useNavigate(null);
  const goSearch = () => nav('/search');

  // const [id, pw, getId, getPw, showPw, setShowPw] = useLoginForm();
  // const pwInputType = showPw ? 'text' : 'password';

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={onSubmitHandler}>
        {/* -------------------------------------------------------------------------- */}
        <Flex direction="row" justify="space-between">
          <Text size="20px" weight={700} children="아이디" />
          <div>
            <label htmlFor="saveId">아이디 저장</label>
            <input type="checkbox" id="showId" />
          </div>
        </Flex>
        <Space height="8px" />
        <StyledInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Space height="25px" />
        {/* -------------------------------------------------------------------------- */}
        <Flex direction="row" justify="space-between">
          <Text size="20px" weight={700} children="비밀번호" />
          <div>
            <label htmlFor="saveId">비밀번호 표시</label>
            <input type="checkbox" id="showId" />
          </div>
        </Flex>
        <Space height="8px" />
        <StyledInput
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        {/* -------------------------------------------------------------------------- */}

        <Line />
        <PopButton width="100%" height="45px" colors={ButtonColors}>
          <Text
            color={brand_white}
            size="20px"
            weight={700}
            children={`${TypeTexts[signState].submit}`}
          ></Text>
        </PopButton>
        <Space height="50px" />
        {signState === 'login' ? null : (
          <>
            <OtherSign>
              <SignText children="이미 회원이라면?" />
              <SignText
                cursor="pointer"
                onClick={() => {
                  setState('login');
                }}
                children="로그인"
              />
            </OtherSign>
            <Space height="15px" />
          </>
        )}
        {signState === 'userSignUp' ? null : (
          <>
            <OtherSign>
              <SignText children="아직 회원이 아니라면?" />
              <SignText
                cursor="pointer"
                onClick={() => {
                  setState('userSignUp');
                }}
                children="일반 회원가입"
              />
            </OtherSign>
            <Space height="15px" />
          </>
        )}
        {signState === 'instructorSignUp' ? null : (
          <>
            <OtherSign>
              <SignText children="아직 강의자가 아니라면?" />
              <SignText
                cursor="pointer"
                onClick={() => {
                  setState('instructorSignUp');
                }}
                children="강의자 회원가입"
              />
            </OtherSign>
            <Space height="15px" />
          </>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

const Line = styled.div`
  margin: 50px auto;
  width: 60%;
  height: 0px;
  border: 1px solid #ccc;
  border-radius: 999px;
`;

const FormWrapper = styled.div`
  border-radius: 35px;
  padding: 60px 60px 45px 60px;

  background-color: ${brand_white};
  color: ${brand_black};
`;

const FormContainer = styled.form`
  width: 285px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid ${brand_black};
  border-radius: 5px;

  font-size: 20px;
`;

const OtherSign = styled.div`
  display: flex;
  justify-content: space-between;
  color: #c2c2c2;

  &:hover {
    color: #443c5b;
  }
`;

const SignText = styled(Text)`
  font-size: 15px;
  font-weight: 700;
`;

export default SignForm;
