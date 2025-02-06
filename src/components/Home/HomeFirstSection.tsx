const HomeFirstSection = () => {
    return (
      <main className="w-full overflow-hidden">
        <section className="relative w-full max-w-[1440px] mx-auto min-h-screen flex items-center">
          <div className="absolute inset-x-0 top-0 h-[16.81%] bg-[#44AEE8]" />
          
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/images/Home/s1.bg.image.png')" }}
          />
  
          <div className="relative w-full max-w-[643px] ml-auto mr-[58px] bg-[#FFF3E3] rounded-[10px] p-[62px]">
            <span className="block font-poppins font-semibold text-base leading-6 tracking-[3px] text-[#333333] mb-[40px]">
              New Arrival
            </span>
  
            <h1 className="font-poppins font-bold text-[52px] leading-[65px] text-[#B88E2F] mb-[20px]">
              Discover Our<br />New Collection
            </h1>
  
            <p className="font-poppins font-medium text-lg leading-6 text-[#333333] mb-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
  
            <button className="px-[72px] py-[25px] bg-[#B88E2F] hover:bg-[#a17d2a] transition-colors">
              <span className="font-poppins font-bold text-base leading-6 uppercase text-white">
                Buy Now
              </span>
            </button>
          </div>
        </section>
      </main>
    );
  };
  
  export default HomeFirstSection;
  