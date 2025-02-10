import { useLocation } from "react-router-dom";
import ProductInfo from "./SingleProductFirstSection";
import Bar from "./SingleProductBar";
import SpThirdSection from "./SingleProductThirdSection";
import SpSecondSection from "./SingleProductSecondSection";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state?.product; // Recupera os dados do produto

  // Fallback caso não haja dados
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <Bar />
      <ProductInfo product={product} /> {/* Passa os dados para ProductInfo */}
      <SpSecondSection />
      <SpThirdSection />
    </div>
  );
};

export default SingleProduct;