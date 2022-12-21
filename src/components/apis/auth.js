import { defaultInstance } from './base';

export const sign = async (email, password, type) => {
  try {
    const { data } = await defaultInstance.post(
      `auth/${type}`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    if (error.response.data.statusCode === 404 || error.response.data.statusCode === 400) {
      alert(error.response.data.message);
    } else if (error.response.data.statusCode === 401) {
      alert('이메일과 비밀번호를 확인해주세요.');
    }
    return false;
  }
};
