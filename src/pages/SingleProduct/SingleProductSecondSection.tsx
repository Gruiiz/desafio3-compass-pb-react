import React from "react";

const SpSecondSection: React.FC = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Navegação entre abas */}
        <div className="flex justify-center space-x-8 mb-8">
          <button className="text-black font-semibold pb-2">
            Description
          </button>
          <button className="text-gray-500 pb-2">Additional Information</button>
        </div>

        {/* Descrição */}
        <div className="w-[1026px] h-[174px] text-left mb-12 mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>

      {/* Imagens */}
      <div className="flex justify-center gap-8 px-8 mx-auto mt-[100px]">
        <img
          src="/src/assets/images/Home/bedroom.png"
          alt="Image 1"
          className="w-[605px] h-[348px] object-cover"
        />
        <img
          src="/src/assets/images/Home/bedroom.png"
          alt="Image 2"
          className="w-[605px] h-[348px] object-cover"
        />
      </div>
    </div>
    </div>
  );
};

export default SpSecondSection;
