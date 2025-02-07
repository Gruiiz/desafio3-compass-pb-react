import PageBanner from "../components/PageBanner";
import InfoBanner from "../components/InfoBanner";

const Checkout= () => {
  return (
    <div>
      <PageBanner 
      currentPage="Checkout"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <InfoBanner/>
    </div>
  );
};

export default Checkout;