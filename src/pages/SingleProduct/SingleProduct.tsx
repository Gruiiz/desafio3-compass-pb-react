import { useLocation } from "react-router-dom";
import ProductInfo from "./SingleProductFirstSection";
import SpThirdSection from "./SingleProductThirdSection";
import SpSecondSection from "./SingleProductSecondSection";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state?.product; 

 
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductInfo product={product} /> 
      <SpSecondSection />
      <SpThirdSection />
    </div>
  );
};

export default SingleProduct;