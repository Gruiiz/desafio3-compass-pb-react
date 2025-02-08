import PageBanner from "../../components/PageBanner";
import InfoBanner from "../../components/InfoBanner";
import CheckoutPage from "./CheckoutSection";

const Checkout= () => {
  return (
    <div>
      <PageBanner 
      currentPage="Checkout"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <CheckoutPage/>
      <InfoBanner/>
    </div>
  );
};

export default Checkout;