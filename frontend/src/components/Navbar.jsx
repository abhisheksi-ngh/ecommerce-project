import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-gray-900"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          LUXE MERN
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            to="/"
            className="text-gray-700 text-sm sm:text-base font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 text-sm sm:text-base font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Shop
          </Link>

          {user ? (
            <>
              <span className="text-sm text-gray-600">Hello, {user.name || 'User'}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm sm:text-base font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 text-sm sm:text-base font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;