import axios from 'axios';
import { BaseUrl } from '../../App';

export const onRegister = async (signState, id, pw) => {
  let apiUrl = BaseUrl + '/campus/register/';

  let body = {
    username: id,
    password: pw,
    nickname: '갓경호',
    is_instructor: signState === 'instructorSignUp' ? true : false,
  };

  try {
    const res = await axios.post(apiUrl, body);

    alert('회원 가입 성공!');
    window.location.reload();
  } catch (err) {
    if (err.response.status === 400) alert('이미 존재하는 id');
    else alert('onRegister - Api 실패');
  }
};

export const onLogin = async (id, pw) => {
  let apiUrl = BaseUrl + '/campus/login/';

  let body = {
    username: id,
    password: pw,
  };

  try {
    const res = await axios.post(apiUrl, body);

    localStorage.setItem('key', res.data.access);

    alert('로그인 성공!');
    return true;
  } catch (err) {
    if (err.response && err.response.status === 400) alert('계정 없음');
    else alert('onLogin - Api 실패');
  }

  return false;
};
