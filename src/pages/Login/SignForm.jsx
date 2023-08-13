import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useLoginForm from './useLoginForm';

const SignForm = () => {
  const nav = useNavigate(null);
  const goSearch = () => nav('/search');

  const [id, pw, idError, pwError, getId, getPw, showPw, setShowPw] =
    useLoginForm();
  const pwInputType = showPw ? 'text' : 'password';

  return (
    <FormContainer onSubmit={goSearch}>
      <input type="text" value={id} onChange={(e) => getId(e.target.value)} />
      <span>{idError}</span>
      <input
        type={pwInputType}
        value={pw}
        onChange={(e) => getPw(e.target.value)}
      />
      <br />
      <span>{pwError}</span>
      <input type="checkbox" id="saveId" />
      <label htmlFor="saveId">아이디 저장</label>
      <input
        type="checkbox"
        id="showPw"
        checked={showPw}
        onChange={() => setShowPw(!showPw)}
      />
      <label htmlFor="savePw">비밀번호 표시</label>
      <button>login</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 500px;
  height: 800px;
  padding: 30px;
  background-color: #aaa;
`;

export default SignForm;
