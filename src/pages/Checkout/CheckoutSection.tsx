import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearCart } from "../../features/cart/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

type FormData = {
  firstName: string;
  lastName: string;
  company?: string;
  zipCode: string;
  country: string;
  street: string;
  city: string;
  province: string;
  addOnAddress?: string;
  email: string;
  additionalInfo?: string;
};

const CheckoutPage: React.FC = () => {

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setShowSuccessPopup(true);
    
    setTimeout(() => {
      dispatch(clearCart());
      navigate('/');
    }, 2000);
  };

  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors } 
  } = useForm<FormData>();
  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const fetchAddress = async (zipCode: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        throw new Error('Invalid ZIP code');
      }

      setValue('street', data.logradouro);
      setValue('city', data.localidade);
      setValue('province', data.uf);
      setValue('country', 'Brazil');
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };



  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
       
        <div className="bg-white w-[608px] shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name *</label>
                <input
                  {...register("firstName", { required: "First Name is required" })}
                  className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
                />
                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name *</label>
                <input
                  {...register("lastName", { required: "Last Name is required" })}
                  className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
                />
                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Company Name (Optional)</label>
              <input
                {...register("company")}
                className="w-full border border-gray-400 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">ZIP Code *</label>
              <input
                {...register("zipCode", { 
                  required: "ZIP Code is required",
                  pattern: {
                    value: /^\d{5}-?\d{3}$/,
                    message: "Invalid ZIP code format (XXXXX-XXX)"
                  }
                })}
                onBlur={(e) => fetchAddress(e.target.value)}
                className={`w-full border ${errors.zipCode ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Country / Region *</label>
              <input
                {...register("country", { required: "Country is required" })}
                className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Street Address *</label>
              <input
                {...register("street", { required: "Street Address is required" })}
                className={`w-full border ${errors.street ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.street && <span className="text-red-500 text-sm">{errors.street.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Town / City *</label>
              <input
                {...register("city", { required: "City is required" })}
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Province *</label>
              <input
                {...register("province", { required: "Province is required" })}
                className={`w-full border ${errors.province ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.province && <span className="text-red-500 text-sm">{errors.province.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Add-on Address</label>
              <input
                {...register("addOnAddress")}
                className="w-full border border-gray-400 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mt-4">Email Address *</label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg p-3`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <textarea
              {...register("additionalInfo")}
              className="w-full h-20 border border-gray-400 rounded-lg p-3 resize-none mt-4"
              placeholder="Additional Information (Optional)"
            />
          </form>
        </div>

        
        <div className="bg-white w-[608px] p-6 mt-10 shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Product</h2>
            <h2 className="text-xl font-medium">Subtotal</h2>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">{item.name}</p>
                <span className="mx-2 text-sm font-medium">x</span>
                <p className="text-sm font-medium">{item.quantity}</p>
              </div>
              <p className="text-sm font-light">
                Rp {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mb-4 pt-4 border-t">
            <p className="text-sm font-normal">Subtotal</p>
            <p className="text-sm font-light">Rp {subtotal.toLocaleString()}</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-normal">Total</p>
            <p className="text-lg font-bold text-[#B88E2F]">
              Rp {subtotal.toLocaleString()}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  defaultChecked
                  className="w-4 h-4 focus:ring focus:ring-[#B88E2F]"
                />
                <span className="text-sm font-normal">Direct Bank Transfer</span>
              </label>
              <p className="mt-2 text-sm text-gray-500">
                Make your payment directly into our bank account. Please use your Order ID as payment reference.
              </p>
            </div>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                className="w-4 h-4 focus:ring focus:ring-[#B88E2F]"
              />
              <span className="text-sm font-normal text-gray-500">Cash On Delivery</span>
            </label>
          </div>

          <p className="mt-6 text-sm text-gray-500 leading-relaxed">
            Your personal data will be used to process your order and for other purposes described in our privacy policy.
          </p>
          
          <div className="flex justify-center">
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-[318px] bg-white  text-black border border-black py-4 rounded-lg font-medium hover:text-white hover:bg-[#9a7627] transition-colors mt-6"
          >
            Place Order
          </button>
          </div>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Order Placed Successfully!</h3>
            <p>You will be redirected to the homepage shortly.</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default CheckoutPage;
