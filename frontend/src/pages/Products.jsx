import { useState, useEffect } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get('/products', { params: { category, subcategory } });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, subcategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-heading">Curating your selection...</p>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 font-heading">
          La Collection
        </h1>
        <p className="text-center text-gray-600 mb-12">Élégance parisienne, précision IA</p>

        <div className="filters flex flex-wrap justify-center gap-4 mb-12">
          <select value={category} onChange={e => setCategory(e.target.value)} className="input-elegant max-w-xs">
            <option value="">Toutes les Collections</option>
            <option>Women</option>
            <option>Men</option>
            <option>Kids</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>
          
          {category && (
            <select value={subcategory} onChange={e => setSubcategory(e.target.value)} className="input-elegant max-w-xs">
              <option value="">Toutes les Sous-collections</option>
              {category === 'Women' && <><option>Garments</option><option>Clothes</option><option>Accessories</option></>}
              {category === 'Men' && <><option>Shirts</option><option>Pants</option><option>Shoes</option></>}
            </select>
          )}
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500 py-20 text-lg">
            Aucun article trouvé. Demandez à notre concierge IA.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;