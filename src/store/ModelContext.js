import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import AccountModel from '../model/AccountModel';
import TodoModel from '../model/TodoModel';

export const modelContext = createContext();

export const ModelContext = ({ children }) => {
  const modelInstances = useRef({
    account: new AccountModel(),
    todolist: new TodoModel(),
  });

  const isSuccess = useCallback((response) => {
    const { status } = response;

    let result = false;

    if (status === 200 || status === 201 || status === 204) {
      result = true;
    }

    return result;
  }, []);

  const isError = useCallback((response) => {
    const { status } = response;

    let result = false;

    if (status === 400 || status === 401) {
      result = true;
    }

    return result;
  }, []);

  const actions = useMemo(() => {
    return {
      ...modelInstances.current,
      isSuccess,
      isError,
    };
  }, [isError, isSuccess]);

  return <modelContext.Provider value={actions}>{children}</modelContext.Provider>;
};

export const useModelContext = () => {
  const c = useContext(modelContext);

  return c;
};
