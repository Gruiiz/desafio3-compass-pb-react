import React, { useState, useRef, useEffect } from "react";

interface FilterProps {
  sortMethod: string;
  onSortChange: (method: string) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (count: number) => void;
  resetPagination: () => void;
  totalResults: number;
}

const ProductFilter: React.FC<FilterProps> = ({
  sortMethod,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
  resetPagination,
  totalResults
}) => {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>(sortMethod);
  const filterButtonRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showFilterPopup &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowFilterPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilterPopup]);

  const handleApplySort = () => {
    onSortChange(selectedSort);
    resetPagination();
    setShowFilterPopup(false);
  };

  const startIndex = 1;
  const endIndex = Math.min(itemsPerPage, totalResults);

  return (
    <div className="relative w-full h-[100px] bg-[#F9F1E7] flex items-center justify-start pl-16 gap-8">
      {/* Filter Section */}
      <div
        ref={filterButtonRef}
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setShowFilterPopup(!showFilterPopup)}
      >
        <div className="w-[25px] h-[21px]">
          <img src="/src/assets/icons/Filter/filtericon.svg" alt="" />
        </div>
        <span className="text-[20px] font-normal text-black">Filter</span>
      </div>

      {/* Filter Popup */}
      {showFilterPopup && (
        <div
          ref={popupRef}
          className="absolute left-16 top-full mt-2 bg-white shadow-lg p-6 rounded-lg z-50 min-w-[250px]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="cheapest"
                  checked={selectedSort === "cheapest"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-[16px]">Sort by cheapest</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="most-expensive"
                  checked={selectedSort === "most-expensive"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-[16px]">Sort by most expensive</span>
              </label>
            </div>
            <button
              onClick={handleApplySort}
              className="w-full py-2 bg-[#F9F1E7] hover:bg-[#e8dccc] transition-colors text-black font-medium rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center gap-4">
        <div className="border border-gray-400 h-[37px]"></div>
        <span className="text-[16px] font-normal">
          Showing {startIndex}–{endIndex} of {totalResults} results
        </span>
      </div>

      {/* Show/Sort by Section */}
      <div className="flex items-center gap-4 ml-auto mr-8">
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-black">Show</span>
          <div className="w-[55px] h-[55px] bg-white flex items-center justify-center">
            <select
              value={itemsPerPage}
              onChange={(e) => {
                onItemsPerPageChange(Number(e.target.value));
                resetPagination();
              }}
              className="w-full h-full text-center text-[20px] text-gray-500 bg-transparent border-none outline-none appearance-none cursor-pointer"
            >
              <option value={16}>16</option>
              <option value={8}>8</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-black">Sort by</span>
          <div className="w-[188px] h-[55px] bg-white flex items-center justify-start px-4">
            <span className="text-[20px] text-gray-500">
              {sortMethod === "cheapest" && "Cheapest"}
              {sortMethod === "most-expensive" && "Most Expensive"}
              {!sortMethod && "Default"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;