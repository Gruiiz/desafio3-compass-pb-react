import PageBanner from "../components/PageBanner";
import InfoBanner from "../components/InfoBanner";

const Cart = () => {
  return (
    <div>
      <PageBanner 
      currentPage="Cart"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <InfoBanner/>
    </div>
  );
};

export default Cart;