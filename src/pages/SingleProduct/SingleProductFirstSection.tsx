import React from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    originalPrice?: number | null;
    isNew?: boolean;
    discountPercentage?: number | null;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addItem({
      id: product.name,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1
    }));
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto p-6 bg-white">
   
      <div className="absolute left-0 flex flex-col space-y-4">
        {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map((img, index) => (
          <div key={index} className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden">
            <img src={img} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      
      <div className="flex flex-wrap justify-between items-start">
       
        <div className="w-[423px] h-[500px] ml-[100px]">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt="Main Product" className="object-cover w-full h-full" />
          </div>
        </div>

      
        <div className="w-full h-[730px] md:w-1/2 lg:w-6/12 p-4">
        
          <h1 className="text-3xl font-poppins mb-4">{product.name}</h1>
          <p className="text-xl text-gray-500 mb-4">
            Rp {product.price.toLocaleString()}
            {product.originalPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">
                Rp {product.originalPrice.toLocaleString()}
              </span>
            )}
          </p>

         
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg mr-1">★</span>
            ))}
            <span className="text-yellow-400 text-lg mr-2">☆</span>
            <p className="text-sm text-gray-500">(5 Customer Reviews)</p>
          </div>

         
          <p className="text-sm text-gray-700 mb-6">
            {product.description}
          </p>

        
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2 mt-8">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    size === "L" ? "bg-yellow-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

         
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2 mt-8">Color</p>
            <div className="flex space-x-2">
              {["#816DFA", "#000000", "#B88E2F"].map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border ${color === "#B88E2F" ? "border-yellow-400" : ""}`}
                ></button>
              ))}
            </div>
          </div>

          
          <div className="flex items-center space-x-4 mt-8">
            <div className="w-[123px] h-[64px] flex items-center border border-gray-300 rounded-2xl px-3 py-1">
              <button>-</button>
              <span className="mx-3">1</span>
              <button>+</button>
            </div>
            <button 
              className="w-[215px] h-[64px] px-6 py-3 border border-gray-300 text-black rounded-2xl hover:bg-gray-800 transition"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>

          <div className="w-[605px] h-0 border-[1px] mt-16"></div>

        
          <ul className="text-sm text-gray-500 space-y-2 mt-10">
            <li><strong>SKU:</strong> SS001</li>
            <li><strong>Category:</strong> Sofas</li>
            <li><strong>Tags:</strong> Sofa, Chair, Home, Shop</li>
            <li><strong>Share:</strong> 
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;