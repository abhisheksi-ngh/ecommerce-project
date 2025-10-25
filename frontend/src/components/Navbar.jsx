import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      console.log('Search for:', searchQuery); // Replace with actual search logic
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      {/* Top Navigation (Categories) */}
      <div className="top-nav">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center text-sm">
          <Link to="/" className="text-white hover:text-yellow-300">All</Link>
          <Link to="/products" className="text-white hover:text-yellow-300 ml-4">Shop</Link>
          <Link to="#" className="text-white hover:text-yellow-300 ml-4">Deals</Link>
          <Link to="#" className="text-white hover:text-yellow-300 ml-4">Support</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo with Unique Icon */}
          <Link to="/" className="logo flex items-center text-xl sm:text-2xl font-bold text-white">
            <span className="mr-2">🌟</span> LUXE MERN
          </Link>

          {/* Search Bar */}
          <div className="search-bar">
            <select className="search-select">
              <option>All Collections</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              placeholder="Search luxury items..."
              className="search-input"
            />
            <button className="search-button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Account/Cart with Unique Styling */}
          <div className="account-cart flex items-center gap-2">
            {user ? (
              <>
                <span className="text-sm text-white mr-3">Hello, {user.name || 'User'}</span>
                <button
                  onClick={logout}
                  className="auth-btn bg-red-600 text-white px-3 py-1.5 text-sm sm:text-base font-medium rounded-full hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="auth-btn bg-blue-600 text-white px-3 py-1.5 text-sm sm:text-base font-medium rounded-full hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Sign In
                </Link>
                <Link to="/register" className="auth-btn bg-green-600 text-white px-3 py-1.5 text-sm sm:text-base font-medium rounded-full hover:bg-green-700 transition-all duration-200 ml-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Sign Up
                </Link>
              </>
            )}
            <Link to="/cart" className="auth-btn bg-purple-600 text-white px-3 py-1.5 text-sm sm:text-base font-medium rounded-full hover:bg-purple-700 transition-all duration-200 ml-2 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16l-2 10H6L4 6zm4 12a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zm-5-10h-2v-2h2v2z"/>
              </svg>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;