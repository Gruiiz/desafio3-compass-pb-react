import React from "react";

const Bar: React.FC = () => {
  return (
    <div className="relative w-full h-[100px] bg-[#F9F1E7] flex items-center justify-start pl-16 gap-8 mt-[100px]">
      {/* Filtro */}
      <div className="flex items-center gap-2">
        <a href="/" className="font-bold text-black">Home</a>
        <span className="">›</span>
        <a href="/shop" className="font-bold text-black">Shop</a>
        <span className="">›</span>
      </div>

      {/* Exibição de Resultados */}
      <div className="flex items-center gap-4">
        <div className="border border-gray-400 h-[37px]"></div>
        <span className="text-[16px] font-normal">
          Asgaard sofa
        </span>
      </div>
  </div>
  );
};

export default Bar;
