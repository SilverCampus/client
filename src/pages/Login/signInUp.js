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

    if (res.status === 200) {
      alert('회원 가입 성공!');
      window.location.reload();
    } else if (res.status === 400) {
      alert('이미 존재하는 id');
    }
  } catch (err) {
    alert('onRegister - Api 실패');
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

    if (res.status === 200) {
      localStorage.setItem('key', res.data.access);

      alert('로그인 성공!');
      return true;
    } else if (res.status === 400) {
      alert('계정 없음');
    }
  } catch (err) {
    alert('onLogin - Api 실패');
  }

  return false;
};
