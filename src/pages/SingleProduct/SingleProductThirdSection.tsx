import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  isNew?: boolean;
  discountPercentage?: number | null;
  imageUrl: string;
}

const SpThirdSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleRows, setVisibleRows] = useState<number>(2);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/produtos");
        if (!response.ok) {
          throw new Error("Erro ao carregar os produtos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    if (visibleRows < 4) {
      setVisibleRows(visibleRows + 2);
    } else {
      navigate('/shop');
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Carregando produtos...</p>;
  }

  const visibleProducts = products.slice(0, visibleRows * 2);

  return (
    <section className="flex flex-col items-center py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            isNew={product.isNew}
            discountPercentage={product.discountPercentage}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      <button 
        className="mt-12 px-6 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded hover:bg-yellow-500 hover:text-white transition"
        onClick={handleShowMore}
      >
        {visibleRows < 4 ? "Show More" : "View All Products"}
      </button>
    </section>
  );
};

export default SpThirdSection;
