const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1441986300917-64672611734d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const ProductCard = ({ product }) => {
  const imageUrl = product.image && product.image.startsWith('http') ? product.image : FALLBACK_IMAGE;

  return (
    <div className="card group cursor-pointer">
      <div className="relative overflow-hidden h-72">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-paris-dark mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.subcategory}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>${product.price}</p>
          <button className="btn-gold text-sm px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;