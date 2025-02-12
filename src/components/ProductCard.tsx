import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { useNavigate } from "react-router-dom";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  isNew?: boolean;
  discountPercentage?: number | null;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  originalPrice,
  isNew,
  discountPercentage,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addItem({
      id: name,
      name: name,
      price: price,
      imageUrl: imageUrl,
      quantity: 1
    }));
  };

  const handleCardClick = () => {
    navigate(`/product/${encodeURIComponent(name)}`, {
      state: {
        product: {
          name,
          description,
          price,
          originalPrice,
          isNew,
          discountPercentage,
          imageUrl
        }
      }
    });
  };

  return (
    <div 
      className="relative w-[285px] h-[446px] bg-gray-100 rounded-lg overflow-hidden shadow-md group cursor-pointer" 
      onClick={handleCardClick}
    >
      
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[301px] object-cover"
      />

      
      {discountPercentage && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium w-12 h-12 flex items-center justify-center rounded-full">
          -{discountPercentage}%
        </div>
      )}
      {isNew && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-medium w-12 h-12 flex items-center justify-center rounded-full">
          New
        </div>
      )}

      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center gap-x-2 mt-2">
          <span className="text-lg font-bold text-gray-800">Rp {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-y-4">
        <button 
          className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>

      
        <div className="flex flex-row items-center justify-center gap-[20px] w-[252px] h-[24px]">
          <button 
            className="flex items-center gap-[8px] text-white font-poppins font-semibold text-[16px] leading-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/src/assets/icons/ProductCard/shareicon.svg" alt="Share Icon" className="w-[16px] h-[16px]" />
            Share
          </button>
          
          <button 
            className="flex items-center gap-[8px] text-white font-poppins font-semibold text-[16px] leading-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/src/assets/icons/ProductCard/compareicon.svg" alt="Compare Icon" className="w-[16px] h-[16px]" />
            Compare
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="flex items-center gap-[8px]"
          >
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;