import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../../components/ProductCard";

interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  discountPercentage?: number | null;
  isNew?: boolean;
  imageUrl: string;
}

interface ProductGridProps {
  sortMethod: string;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onTotalResultsChange: (total: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  sortMethod,
  itemsPerPage,
  currentPage,
  onPageChange,
  
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/produtos");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error, can't find products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = useMemo(() => {
    if (sortMethod === "cheapest") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortMethod === "most-expensive") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  }, [products, sortMethod]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      const yOffset = productSection.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div id="product-section" className="flex flex-col items-center mb-10">
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-8">
            {currentProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed bg-[#F9F1E7]"
                    : "bg-[#F9F1E7] hover:bg-gray-200"
                }`}
                aria-label="Previous Page"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border rounded ${
                    currentPage === index + 1
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] hover:bg-gray-200"
                  }`}
                  aria-label={`Page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed bg-[#F9F1E7]"
                    : "bg-[#F9F1E7] hover:bg-gray-200"
                }`}
                aria-label="Next Page"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;