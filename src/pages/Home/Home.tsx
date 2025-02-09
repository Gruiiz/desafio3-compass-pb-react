import HomeFirstSection from "./HomeFirstSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeThirdSection from "./HomeThirdSection";
import HomeForurthSection from "./HomeFourthSection";
import HomeFifthSection from "./HomeFifthSection";

const HomePage = () => {
  return (
    <div>
      {/* Outras seções */}
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection/>
      <HomeForurthSection />
      <HomeFifthSection />
      {/* Mais seções */}
    </div>
  );
};

export default HomePage;