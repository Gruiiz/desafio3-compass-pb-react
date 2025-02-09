// pages/Shop.tsx
import PageBanner from "../../components/PageBanner";
import InfoBanner from "../../components/InfoBanner";
import ProductGrid from "./ShopFirstSection";
import ProductFilter from "./ShopFilter";

const Shop = () => {
  return (
    <div>
      <PageBanner 
      currentPage="Shop"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <ProductFilter/>
      <ProductGrid/>
      <InfoBanner/>
    </div>
  );
};

export default Shop;