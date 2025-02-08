import PageBanner from "../../components/PageBanner";
import InfoBanner from "../../components/InfoBanner";
import CartSection from "./CartSection";

const Cart = () => {
  return (
    <div>
      <PageBanner 
      currentPage="Cart"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <CartSection/>
      <InfoBanner/>
    </div>
  );
};

export default Cart;