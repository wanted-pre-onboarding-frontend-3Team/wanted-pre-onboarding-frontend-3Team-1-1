import React, { useState } from 'react';

const useLocalStorage = (key) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  });

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStorageValue(value);
  };

  return [storageValue, setValue];
};

export default useLocalStorage;
