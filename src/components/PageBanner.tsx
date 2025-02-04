// components/PageBanner.tsx
import React from 'react';

interface PageBannerProps {
  currentPage: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ currentPage, backgroundImage }) => {
  return (
    <div className="relative w-full h-[316px] mt-[100px]">
      {/* Background Image with Blur */}
      <div 
        className="absolute w-full h-full blur-sm"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Page Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="font-poppins font-medium text-5xl leading-[72px] text-black">
          {currentPage}
        </h1>
        
        {/* Navigation Path */}
        <div className="mt-2 font-poppins text-base text-black flex items-center gap-2">
          <span className="font-medium">Home</span>
          <span className="transform -rotate-90">›</span>
          <span className="font-light">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
