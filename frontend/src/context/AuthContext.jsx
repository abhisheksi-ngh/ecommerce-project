import { createContext, useContext, useState, useEffect } from 'react';
import API from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await API.post('/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser({ token: res.data.token });
  };

  const register = async (name, email, password) => {
    const res = await API.post('/users/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    setUser({ token: res.data.token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-2xl font-heading">Loading LUXE MERN...</p>
    </div>
  );

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);