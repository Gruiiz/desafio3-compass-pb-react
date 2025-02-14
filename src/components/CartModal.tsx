import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

interface CartModalProps {
  isVisible: boolean;
  items: { id: string; name: string; price: number; imageUrl: string; quantity: number }[];
  onClose: () => void;
  onDelete?: (index: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isVisible, items, onClose }) => {
  const dispatch = useDispatch();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isVisible) return null;

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

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

        <div className="pt-4 border-t flex-grow overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-sm">Your cart is empty</p>
          ) : (
            <ul>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center flex-grow">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        <span className="text-black">{item.quantity} x</span>{" "}
                        <span className="text-[#B88E2F]">Rp {item.price.toLocaleString()}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="w-[20px] h-[20px] flex items-center justify-center text-white hover:text-black ml-4 rounded-full bg-[#9F9F9F]"
                  >
                    x
                  </button>
                </div>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-semibold text-[#B88E2F]">Rp {subtotal.toLocaleString()}</span>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between space-x-2">
              <a href="/cart" className="flex-1">
                <button className="w-full bg-white text-black border border-black py-2 px-4 rounded-2xl hover:bg-gray-300">
                  Cart
                </button>
              </a>
              <a href="/checkout" className="flex-1">
                <button className="w-full bg-white text-black border border-black py-2 px-4 rounded-2xl hover:bg-gray-300">
                  Checkout
                </button>
              </a>
                <button className="flex-1 bg-white text-black border border-black py-2 px-4 rounded-2xl hover:bg-gray-300">
                  Comparison
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;