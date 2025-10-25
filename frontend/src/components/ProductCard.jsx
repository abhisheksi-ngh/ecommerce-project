import './ProductCard.css';

const FALLBACK_IMAGE = "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=300";

const ProductCard = ({ product }) => {
  const imageUrl = product.image && product.image.startsWith('http') ? product.image : FALLBACK_IMAGE;

  return (
    <div className="product-card group cursor-pointer">
      <div className="relative overflow-hidden h-72">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
        />
        <div className="overlay"></div>
      </div>
      
      <div className="content">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.subcategory}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-yellow-600">${product.price}</p>
          <button className="btn-gold text-sm px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;