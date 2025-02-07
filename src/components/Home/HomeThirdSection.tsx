import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard"; // Certifique-se de ajustar o caminho conforme necessário


interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  isNew?: boolean;
  discountPercentage?: number | null;
  imageUrl: string;
}

const HomeThirdSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para buscar os dados do JSON
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json"); // Caminho relativo ao arquivo JSON
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

  if (loading) {
    return <p className="text-center text-gray-500">Carregando produtos...</p>;
  }

  return (
    <section className="flex flex-col items-center py-16 bg-gray-100">
      {/* Título da seção */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Products</h2>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
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

      {/* Botão "Show More" */}
      <button className="mt-12 px-6 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded hover:bg-yellow-500 hover:text-white transition">
        Show More
      </button>
    </section>
  );
};

export default HomeThirdSection;
