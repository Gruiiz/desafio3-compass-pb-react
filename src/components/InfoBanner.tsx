const InfoBanner = () => {
  const features = [
    {
      iconPath: '/src/assets/icons/InfoBanner/trophyicon.svg', // Substitua pelo caminho real
      title: 'High Quality',
      description: 'crafted from top materials',
    },
    {
      iconPath: '/src/assets/icons/InfoBanner/guaranteeicon.svg', // Substitua pelo caminho real
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      iconPath: '/src/assets/icons/InfoBanner/shippingicon.svg', // Substitua pelo caminho real
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      iconPath: '/src/assets/icons/InfoBanner/customersupporticon.svg', // Substitua pelo caminho real
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between bg-[#FAF3EA] py-24">
      <div className="flex flex-row justify-between items-center gap-12 max-w-[1334px] w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center gap-4">
            <img src={feature.iconPath} alt={`${feature.title} icon`} className="w-16 h-16" />
            <div className="flex flex-col">
              <h3 className="text-[25px] font-semibold text-[#242424]">{feature.title}</h3>
              <p className="text-[20px] font-medium text-[#898989]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBanner;
