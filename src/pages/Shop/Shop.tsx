// pages/Shop.tsx
import PageBanner from "../../components/PageBanner";
import InfoBanner from "../../components/InfoBanner";
import ProductGrid from "./ShopFirstSection";
import ProductFilter from "./ShopFilter";
import { useState } from "react";

const Shop = () => {

  const [sortMethod, setSortMethod] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  return (
    <div>
      <PageBanner 
      currentPage="Shop"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <ProductFilter
              sortMethod={sortMethod}
              onSortChange={setSortMethod}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
              resetPagination={() => setCurrentPage(1)}
              totalResults={totalResults}
      />
      <ProductGrid
              sortMethod={sortMethod}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              onTotalResultsChange={setTotalResults}
      />
      <InfoBanner/>
    </div>
  );
};

export default Shop;