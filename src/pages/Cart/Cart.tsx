import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../features/cart/cartSlice"; // Você precisará criar estas ações

const CartSection: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calcular totais
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if(newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className="w-full bg-white py-10 px-4 pt-[100px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Tabela de Produtos */}
        <div className="w-[817px] h-[215px] flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="bg-[#F9F1E7] grid grid-cols-4 gap-4 pb-4 font-semibold text-center">
            <span className="mt-4 ml-[75px]">Product</span>
            <span className="mt-4 -ml-[40px]">Price</span>
            <span className="mt-4">Quantity</span>
            <span className="mt-4 -ml-[100px]">Subtotal</span>
          </div>
          
          {/* Itens do Carrinho */}
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-4 items-center py-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-600">{item.name}</span>
              </div>
              
              <span className="text-gray-600 ml-[40px]">Rs. {item.price.toLocaleString()}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="w-[106px] border border-[#9F9F9F] text-center rounded-lg py-1 ml-[50px]"
              />
              <div className="flex items-center gap-2">
                <span className="font-semibold">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do Carrinho */}
        <div className="w-[393px] h-[390px] bg-[#F9F1E7] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold pb-4">Cart Totals</h2>
          <div className="flex justify-between mt-10 text-center">
            <span className="text-gray-600 ml-[65px]">Subtotal</span>
            <span className="text-gray-600 mr-[75px]">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mt-2 pt-4">
            <span className="text-gray-800 font-semibold ml-[65px]">Total</span>
            <span className="text-primary font-semibold text-lg mr-[75px]">Rs. {total.toLocaleString()}</span>
          </div>
          <button className="mt-14 w-[222px] border border-black bg-[#F9F1E7] text-black py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;