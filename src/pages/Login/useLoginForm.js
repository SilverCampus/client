import { useState } from 'react';

const useLoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');

  const [showPw, setShowPw] = useState(false);

  const isValidLoginChar = (ch) => {
    if ('0' <= ch && ch <= '9') return true;
    if ('A' <= ch && ch <= 'Z') return true;
    if ('a' <= ch && ch <= 'z') return true;
    if (ch === '@') return true;

    setIdError('Error : Not a valid login character');
    return false;
  };

  const getId = (id) => {
    if (id === '') {
      setId(id);
      return;
    }

    let newChar = id[id.length - 1];
    setIdError('');
    if (isValidLoginChar(newChar)) setId(id);
  };

  const getPw = (pw) => {
    setPw(pw);
  };

  return [id, pw, idError, pwError, getId, getPw, showPw, setShowPw];
};

export default useLoginForm;
