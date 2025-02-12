const HomeSecondSection = () => {
  const categories = [
    { name: 'Dining', image: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/dining.png' },
    { name: 'Living', image: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/living.png' },
    { name: 'Bedroom', image: 'https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/bedroom.png' },
  ];

  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse The Range</h2>
          <p className="text-xl text-gray-600">Treating all skin conditions with care</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-[480px] rounded-lg overflow-hidden mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSecondSection;