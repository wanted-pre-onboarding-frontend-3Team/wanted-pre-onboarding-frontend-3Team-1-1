import { useCallback, useState } from 'react';
import { useMount } from './useMount';

const useForm = (formId, initForm) => {
  const [validation, setValidation] = useState(false);

  const [form, setForm] = useState(initForm);

  const checkValidation = useCallback(() => {
    const formElement = document.getElementById(formId);

    const inputs = formElement?.getElementsByTagName('input') || [];

    let result = true;

    for (const input of inputs) {
      const { required, validity } = input;

      if (required && !validity.valid) {
        result = false;
      }
    }

    setValidation(result);
  }, [formId]);

  const setValue = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;

      checkValidation();

      let result = value;

      if (type === 'checkbox') {
        result = checked;
      }

      setForm((prev) => {
        return { ...prev, [name]: result };
      });
    },
    [checkValidation],
  );

  useMount(() => {
    checkValidation();
  });

  return { form, setForm, setValue, validation };
};

export default useForm;
