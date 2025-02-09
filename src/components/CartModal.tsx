import React from 'react';

interface CartModalProps {
  isVisible: boolean;
  items: { name: string; price: number }[];
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isVisible, items, onClose }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div 
        className="absolute top-0 right-0 bg-white p-4 shadow-xl w-[417px] h-[746px] max-h-screen overflow-y-auto flex flex-col"
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseLeave={onClose}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-poppins text-[24px]">Shopping Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="pt-4 border-t">
          <div className="flex-grow">
            {items.length === 0 ? (
              <p className="text-sm">Seu carrinho está vazio</p>
            ) : (
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="mb-2 text-sm">
                    {item.name} - R$ {item.price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t">
          <div className="flex justify-between space-x-2">
            <button className="flex-1 bg-white text-black border border-black py-2 px-4 rounded-2xl hover:bg-gray-300">
              Cart
            </button>
            <button className="flex-1 bg-white text-black py-2 border border-black px-4 rounded-2xl hover:bg-gray-300">
              Checkout
            </button>
            <button className="flex-1 bg-white text-black py-2 border border-black px-4 rounded-2xl hover:bg-gray-300">
              Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
