import React from "react";

const ProductInfo: React.FC = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto p-6 bg-white ">
      {/* Imagens laterais */}
      <div className="absolute left-0 flex flex-col space-y-4">
        {["/src/assets/images/Home/dining.png", "/path-to-image2.jpg", "/path-to-image3.jpg", "/path-to-image4.jpg"].map((img, index) => (
          <div key={index} className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden">
            <img src={img} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-wrap justify-between items-start">
        {/* Imagem principal */}
        <div className="w-[423px] h-[500px] ml-[100px] ">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src="/src/assets/images/Home/dining.png" alt="Main Product" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Informações do produto */}
        <div className="w-full h-[730px] md:w-1/2 lg:w-6/12 p-4">
          {/* Título e preço */}
          <h1 className="text-3xl font-poppins mb-4">Asgaard Sofa</h1>
          <p className="text-xl text-gray-500 mb-4">Rs. 250,000.00</p>

          {/* Avaliação */}
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg mr-1">★</span>
            ))}
            <span className="text-yellow-400 text-lg mr-2">☆</span>
            <p className="text-sm text-gray-500">(5 Customer Reviews)</p>
          </div>

          {/* Descrição */}
          <p className="text-sm text-gray-700 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Seleção de tamanho */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2 mt-8">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    size === "L" ? "bg-yellow-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Seleção de cor */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2 mt-8">Color</p>
            <div className="flex space-x-2">
              {["#816DFA", "#000000", "#B88E2F"].map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border ${color === "#B88E2F" ? "border-yellow-400" : ""}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantidade e botão adicionar ao carrinho */}
          <div className="flex items-center space-x-4 mt-8">
            <div className="w-[123px] h-[64px] flex items-center border border-gray-300 rounded-2xl px-3 py-1">
              <button>-</button>
              <span className="mx-3">1</span>
              <button>+</button>
            </div>
            <button className="w-[215px] h-[64px] px-6 py-3 border border-gray-300 text-black rounded-2xl hover:bg-gray-800 transition">Add To Cart</button>
          </div>

          <div className="w-[605px] h-0 border-[1px] mt-16"></div>

          {/* Informações adicionais */}
          <ul className="text-sm text-gray-500 space-y-2 mt-10">
            <li><strong>SKU:</strong> SS001</li>
            <li><strong>Category:</strong> Sofas</li>
            <li><strong>Tags:</strong> Sofa, Chair, Home, Shop</li>
            <li><strong>Share:</strong> 
              {/* Ícones genéricos para redes sociais */}
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
              <span className="ml-2 inline-block w-5 h-5 bg-black rounded-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
