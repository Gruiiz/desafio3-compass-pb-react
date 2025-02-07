import HomeFirstSection from "../components/Home/HomeFirstSection";
import HomeSecondSection from "../components/Home/HomeSecondSection";
import HomeThirdSection from "../components/Home/HomeThirdSection";
import HomeForurthSection from "../components/Home/HomeFourthSection";
import HomeFifthSection from "../components/Home/HomeFifthSection";

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