// useAuth.js
import { useState } from 'react';
import { login, logout } from '../utils/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const loginUser = async (username, password) => {
    const userData = await login(username, password);
    setUser(userData);
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };

  return { user, loginUser, logoutUser };
};

export default useAuth;