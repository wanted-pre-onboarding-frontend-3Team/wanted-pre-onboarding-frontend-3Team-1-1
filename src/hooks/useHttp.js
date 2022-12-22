import { useCallback, useState } from 'react';

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}${requestConfig.url}`, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        if (requestConfig.url === '/auth/signin') throw new Error('아이디, 비밀번호를 확인해주세요.');
        if (requestConfig.url === '/auth/signup') throw new Error('이미 등록된 아이디입니다.');
      }

      if (requestConfig.method === 'DELETE') return;

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message || 'api error!');
    }
  }, []);

  return { sendRequest, error };
};

export default useHttp;
