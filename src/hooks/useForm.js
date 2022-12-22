import { useCallback, useEffect, useRef, useState } from 'react';

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

  const setValue = useCallback((e) => {
    const { type, name, value, checked } = e.target;

    let updatedValue = value;

    if (type === 'checkbox') {
      updatedValue = checked;
    }

    setForm((prev) => {
      return { ...prev, [name]: updatedValue };
    });
  }, []);

  const register = useCallback(
    (name) => {
      return {
        name,
        onChange: setValue,
        value: form[name],
        ref: (el) => inputs.current.set(name, el),
      };
    },
    [form, setValue],
  );

  useEffect(() => {
    checkValidation();
  }, [checkValidation, form]);

  return { form, setForm, setValue, validation, register };
};

export default useForm;
