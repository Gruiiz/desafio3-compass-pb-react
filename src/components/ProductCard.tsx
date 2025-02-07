import React, { useState } from "react";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null; // Preço original para desconto
  isNew?: boolean; // Indica se o produto é novo
  discountPercentage?: number | null; // Porcentagem de desconto
  imageUrl: string; // URL da imagem do produto
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
  const [liked, setLiked] = useState(false); // Estado para controlar o botão "Like"

  return (
    <div className="relative w-[285px] h-[446px] bg-gray-100 rounded-lg overflow-hidden shadow-md group">
      {/* Imagem do produto */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[301px] object-cover"
      />

      {/* Selo de desconto */}
      {discountPercentage && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium w-12 h-12 flex items-center justify-center rounded-full">
          -{discountPercentage}%
        </div>
      )}

      {/* Selo "Novo" */}
      {isNew && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-medium w-12 h-12 flex items-center justify-center rounded-full">
          New
        </div>
      )}

      {/* Informações do produto */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>

        {/* Preços */}
        <div className="flex items-center gap-x-2 mt-2">
          <span className="text-lg font-bold text-gray-800">Rp {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Efeito de hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-y-4">
        <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md">
          Add to cart
        </button>

        {/* Seção Share, Compare e Like */}
        <div className="flex flex-row items-center justify-center gap-[20px] w-[252px] h-[24px]">
          {/* Share */}
          <button className="flex items-center gap-[8px] text-white font-poppins font-semibold text-[16px] leading-[24px]">
            <img src="/src/assets/icons/shareicon.svg" alt="Share Icon" className="w-[16px] h-[16px]" />
            Share
          </button>

          {/* Compare */}
          <button className="flex items-center gap-[8px] text-white font-poppins font-semibold text-[16px] leading-[24px]">
            <img src="/src/assets/icons/compareicon.svg" alt="Compare Icon" className="w-[16px] h-[16px]" />
            Compare
          </button>

          {/* Like */}
          <button
            onClick={() => setLiked(!liked)} // Alterna o estado ao clicar
            className={`flex items-center gap-[8px] font-poppins font-semibold text-[16px] leading-[24px]`}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors duration-300`}
            >
              {/* Caminho do coração com cor dinâmica */}
              <path
                d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z"
                stroke={liked ? "red" : "white"} // Cor da borda dinâmica
                strokeWidth="1.8"
                fill={liked ? "red" : "none"} // Preenchimento dinâmico
              />
            </svg>
            <span className="text-white">Like</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
