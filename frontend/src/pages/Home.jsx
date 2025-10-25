import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
          <span className="font-serif">LUXE MERN</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
          Where elegance meets innovation. Discover curated luxury powered by artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            to="/products"
            className="btn-gold inline-block px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Shop Now
          </Link>
          <Link
            to="/register"
            className="btn-black inline-block px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="feature-card text-center">
            <div className="text-4xl sm:text-5xl text-blue-600 mb-4">💎</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Exclusive Selection</h3>
            <p className="text-gray-600 text-sm sm:text-base">Over 100 handpicked luxury pieces</p>
          </div>
          <div className="feature-card text-center">
            <div className="text-4xl sm:text-5xl text-blue-600 mb-4">🤖</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">AI Concierge</h3>
            <p className="text-gray-600 text-sm sm:text-base">Ask questions, get instant answers</p>
          </div>
          <div className="feature-card text-center">
            <div className="text-4xl sm:text-5xl text-blue-600 mb-4">🔒</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Top-Tier Security</h3>
            <p className="text-gray-600 text-sm sm:text-base">JWT, local data, and full privacy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;