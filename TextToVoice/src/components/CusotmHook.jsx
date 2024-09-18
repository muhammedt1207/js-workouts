import { useState } from 'react';

function usePasswordValidation(initialPassword) {
  const [password, setPassword] = useState(initialPassword);
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  return {
    password,
    passwordError,
    handlePasswordChange,
  };
}

export default usePasswordValidation;