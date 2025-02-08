import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Billing Details */}
        <div className="bg-white w-[608px] h-[1714] shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg p-3"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-lg p-3"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">ZIP Code</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="ZIP Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Country / Region</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Country / Region"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Street Address</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Street Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Town / City</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Town / City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Province</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Province"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Add-on Address</label>
              <input
                type="text"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Add-on Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mt-8">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-400 rounded-lg p-3"
                placeholder="Email Address"
              />
            </div>
            <textarea
              placeholder="Additional Information (Optional)"
              className="w-full h-20 border border-gray-400 rounded-lg p-3 resize-none mt-4 text-gray-500 placeholder-gray-500 mt-8"></textarea>
          </form>
        </div>

        {/* Order Summary */}
        <div className="relative bg-white w-[608px] h-[789px] p-6 mt-10 shadow-md rounded-lg">
      {/* Título */}
      <div className="flex justify-between items-center mb-6 mt-20">
        <h2 className="text-xl font-medium text-black">Product</h2>
        <h2 className="text-xl font-medium text-black">Subtotal</h2>
      </div>

      {/* Detalhes do Produto */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <p className="text-sm text-gray-500">Asgaard sofa</p>
          <span className="mx-2 text-sm font-medium text-black">x</span>
          <p className="text-sm font-medium text-black">1</p>
        </div>
        <p className="text-sm font-light text-black">Rs. 250,000.00</p>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-normal text-black">Subtotal</p>
        <p className="text-sm font-light text-black">Rs. 250,000.00</p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center border-gray-300  mb-6">
        <p className="text-sm font-normal text-black">Total</p>
        <p className="text-lg font-bold text-[#B88E2F]">Rs. 250,000.00</p>
      </div>

      {/* Métodos de Pagamento */}
      <div className="space-y-6">
        {/* Transferência Bancária */}
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="paymentMethod"
              value="bankTransfer"
              defaultChecked
              className="w-4 h-4 text-black focus:ring focus:ring-offset-0 focus:ring-[#B88E2F]"
            />
            <span className="text-sm font-normal text-black">Direct Bank Transfer</span>
          </label>
          <p className="mt-2 text-sm text-gray-500">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
        </div>

        {/* Pagamento na Entrega */}
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnDelivery"
            className="w-4 h-4 border-gray-400 focus:ring focus:ring-offset-0 focus:ring-[#B88E2F]"
          />
          <span className="text-sm font-normal text-gray-500">Direct Bank Transfer</span>
        </label>

        {/* Pagamento na Entrega */}
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnDelivery"
            className="w-4 h-4 border-gray-400 focus:ring focus:ring-offset-0 focus:ring-[#B88E2F]"
          />
          <span className="text-sm font-normal text-gray-500">Cash On Delivery</span>
        </label>
      </div>

      {/* Informações de Privacidade */}
      <p className="mt-10 text-sm text-gray-500 leading-relaxed">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
      </p>

      {/* Botão de Finalizar Pedido */}
      <button
        type="button"
        className="absolute w-[318px] h-[64px] bottom-[100px] left-[50%] transform -translate-x-[50%] bg-white border border-black rounded-lg px-6 py-3 hover:bg-gray-100 transition"
      >
        Place order
      </button>
    </div>
        </div>
        </div>
    
  )};

  export default CheckoutPage;
