import ProductInfo from "./SingleProductFirstSection";
import Bar from "./SingleProductBar";
import SpThirdSection from "./SingleProductThirdSection";
import SpSecondSection from "./SingleProductSecondSection";


const SingleProduct = () => {
    return (
      <div>
        <Bar/>
        <ProductInfo/>
        <SpSecondSection/>
        <SpThirdSection/>
      </div>
    );
  };
  
  export default SingleProduct;