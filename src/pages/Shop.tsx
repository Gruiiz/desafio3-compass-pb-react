// pages/Shop.tsx
import PageBanner from "../components/PageBanner";
import InfoBanner from "../components/InfoBanner";
import ProductGrid from "../components/Shop/ShopFirstSection";
import ProductFilter from "../components/Shop/ShopFilter";

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