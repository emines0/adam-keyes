import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    desktop: false,
    tablet: false,
    mobile: true,
  });

  const [formValues, setFormValues] = useState({
    name: '',
    nameError: false,
    email: '',
    emailError: false,
    emailValidate: true,
    message: '',
    messageError: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        windowSize,
        formValues,
        setWindowSize,
        setFormValues,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
