import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop/';
axios.defaults.withCredentials = false;

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = useCallback(async (configObj) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axios.request(configObj);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
