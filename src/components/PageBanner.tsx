
interface PageBannerProps {
  currentPage: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ currentPage, backgroundImage }) => {
  return (
    <div className="relative w-full h-[316px] mt-[100px]">
      
      <div 
        className="absolute w-full h-full blur-[6]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="font-poppins font-medium text-5xl leading-[72px] text-black">
          {currentPage}
        </h1>
        
        
        <div className="mt-2 font-poppins text-base text-black flex items-center gap-2">
          <a href="/" className="font-bold text-black">Home</a>
          <span className="">›</span>
          <span className="font-light">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;