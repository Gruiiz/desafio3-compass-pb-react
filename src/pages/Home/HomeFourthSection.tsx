import { useState, useEffect } from 'react';

interface CarouselImage {
  id: number;
  src: string;
  title: string;
  roomType: string;
}

const HomeFourthSection = () => {
  const [images, setImages] = useState<CarouselImage[]>([
    { id: 1, src: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/bedroom.png', title: 'Inner Peace', roomType: 'Bed Room' },
    { id: 2, src: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/living.png', title: 'Harmony', roomType: 'Living Room' },
    { id: 3, src: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/dining.png', title: 'Elegance', roomType: 'Dining Room' },
    { id: 4, src: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/Gillde+Mag+-+Inspiration+%26+Productivity+for+Everyone.jpg', title: 'Focus', roomType: 'Office' },
  ]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeImageId, setActiveImageId] = useState(1);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setImages(prevImages => {
        const [first, ...rest] = prevImages;
        return [...rest, first];
      });
      setActiveImageId(prevId => (prevId % images.length) + 1);
    }
  };

  const handleDotClick = (id: number) => {
    if (!isTransitioning && id !== activeImageId) {
      setIsTransitioning(true);
      setImages(prevImages => {
        const imageIndex = prevImages.findIndex(img => img.id === id);
        const newImages = [...prevImages.slice(imageIndex), ...prevImages.slice(0, imageIndex)];
        return newImages;
      });
      setActiveImageId(id);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <section className="relative w-full max-w-[100vw] h-[670px] bg-[#FCF8F3] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 h-full relative">
        <div className="absolute left-[100px] top-[223px] space-y-6">
          <h2 className="text-[40px] font-bold text-[#3A3A3A] leading-[120%] max-w-[422px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-base text-[#616161] max-w-[368px]">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="w-[176px] h-[48px] bg-[#B88E2F] text-white font-semibold">
            Explore More
          </button>
        </div>

        <div className="absolute left-[600px] w-[1196px] h-[582px] overflow-hidden">
          <div className="flex gap-5 transition-all duration-300">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative ${index === 0 ? 'w-[404px]' : 'w-[372px]'}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`object-cover ${
                    index === 0 ? 'h-[582px]' : 'h-[486px]'
                  } transition-all duration-300`}
                />
                {index === 0 && (
                  <div className="absolute bottom-4 left-6 bg-white/70 backdrop-blur-sm p-4 w-[217px]">
                    <div className="flex items-center gap-2 text-[#616161]">
                      <span className="text-base">0{image.id}</span>
                      <div className="w-[27px] h-[1px] bg-[#616161]" />
                      <span className="text-base">{image.roomType}</span>
                    </div>
                    <h3 className="text-[28px] font-semibold text-[#3A3A3A] mt-2">{image.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute left-[241px] bottom-4 w-12 h-12 bg-[#B88E2F] flex items-center justify-center"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-[40px] left-[428px] flex gap-5">
            {[1, 2, 3, 4].map(id => (
              <button
                key={id}
                onClick={() => handleDotClick(id)}
                className="group"
              >
                <div className={`w-[27px] h-[27px] border rounded-full relative ${activeImageId === id ? 'border-[#B88E2F] opacity-70' : 'border-transparent'}`}>
                  <div className={`absolute inset-0 m-auto w-[11px] h-[11px] rounded-full ${activeImageId === id ? 'bg-[#B88E2F]' : 'bg-[#D8D8D8]'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourthSection;
