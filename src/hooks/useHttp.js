import { useCallback } from 'react';

const useHttp = () => {
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PRE_ONBORDING}${requestConfig.url}`, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('api error');
      }

      if (requestConfig.method === 'DELETE') return;

      const data = await response.json();

      applyData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return sendRequest;
};

export default useHttp;
