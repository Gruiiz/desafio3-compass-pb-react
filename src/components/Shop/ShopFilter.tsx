import React from "react";

const FilterSection: React.FC = () => {
  return (
    <div className="relative w-full h-[100px] bg-[#F9F1E7] flex items-center justify-start pl-16 gap-8">
      {/* Filtro */}
      <div className="flex items-center gap-2">
        <div className="w-[25px] h-[21px]"><img src="/src/assets/icons/Filter/filtericon.svg" alt="" /></div>
        <span className="text-[20px] font-normal text-black">Filter</span>
      </div>

      {/* Ícones de Visualização */}
      <div className="flex items-center gap-4">
        <div className="w-[28px] h-[23px]"><img src="/src/assets/icons/Filter/gridicon.svg" alt="" /></div>
        <div className="w-[24px] h-[24px]"><img src="/src/assets/icons/Filter/viewicon.svg" alt="" /></div>
      </div>

      {/* Exibição de Resultados */}
      <div className="flex items-center gap-4">
        <div className="border border-gray-400 h-[37px]"></div>
        <span className="text-[16px] font-normal">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Opções de Exibição */}
      <div className="flex items-center gap-4 ml-auto mr-8">
        {/* Mostrar */}
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-black">Show</span>
          <div className="w-[55px] h-[55px] bg-white flex items-center justify-center">
            <span className="text-[20px] text-gray-500">16</span>
          </div>
        </div>

        {/* Ordenar por */}
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-black">Short by</span>
          <div className="w-[188px] h-[55px] bg-white flex items-center justify-start px-4">
            <span className="text-[20px] text-gray-500">Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
