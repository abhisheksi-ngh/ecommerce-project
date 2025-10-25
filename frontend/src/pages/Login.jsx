import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/products');
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="card w-full max-w-md p-10">
        <h2 className="text-4xl font-bold text-center mb-8 font-heading">
          Bienvenue
        </h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input-elegant"
              placeholder="marie@paris.fr"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="input-elegant"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="w-full btn-gold py-4 text-lg">
            Entrer
          </button>
        </form>
        
        <p className="text-center mt-6 text-sm text-gray-600">
          Pas de compte? <Link to="/register" className="text-paris-gold hover:underline">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;