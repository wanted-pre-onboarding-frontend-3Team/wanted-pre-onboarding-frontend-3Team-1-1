import { useCallback, useRef, useState } from 'react';
import { useMount } from './useMount';

const useForm = (initForm) => {
  const [validation, setValidation] = useState(false);

  const [form, setForm] = useState(initForm);

  const inputs = useRef(new Map());

  const checkValidation = useCallback(() => {
    let result = true;

    inputs.current.forEach((input) => {
      const { required, validity } = input;

      if (required && !validity.valid) {
        result = false;
      }
    }, []);

    setValidation(result);
  }, []);

  const setValue = useCallback(
    (e) => {
      const { name, value } = e.target;

      checkValidation();

      setForm((prev) => {
        return { ...prev, [name]: value };
      });
    },
    [checkValidation],
  );

  const register = useCallback(
    (name) => {
      return {
        name,
        onChange: setValue,
        ref: (el) => inputs.current.set(name, el),
      };
    },
    [setValue],
  );

  useMount(() => {
    checkValidation();
  });

  return { form, setForm, setValue, validation, register };
};

export default useForm;
