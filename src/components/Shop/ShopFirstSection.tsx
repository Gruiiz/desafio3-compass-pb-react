import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  discountPercentage?: number | null;
  isNew?: boolean;
  imageUrl: string;
}

const ITEMS_PER_PAGE = 16; // 4 fileiras de 4 colunas

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch dos dados do db.json
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Efeito para rolar ao topo sempre que a página mudar
  useEffect(() => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      const yOffset = productSection.getBoundingClientRect().top + window.scrollY - 20; // Ajuste fino no topo
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, [currentPage]);

  // Manipular troca de página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Determina os produtos da página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div id="product-section" className="flex flex-col items-center">
      {loading ? (
        <p className="text-gray-500">Carregando produtos...</p>
      ) : (
        <>
          {/* Grade de Produtos */}
          <div className="grid grid-cols-4 gap-8">
            {currentProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed bg-[#F9F1E7]" : "bg-[#F9F1E7] hover:bg-gray-200"
                }`}
                aria-label="Página Anterior"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border-r-[10] ${
                    currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] hover:bg-gray-200"
                  }`}
                  aria-label={`Página ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed bg-[#F9F1E7]" :  "bg-[#F9F1E7] hover:bg-gray-200"
                }`}
                aria-label="Próxima Página"
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
