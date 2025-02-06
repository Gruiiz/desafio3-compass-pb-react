import HomeFirstSection from "../components/Home/HomeFirstSection";
import HomeForurthSection from "../components/Home/HomeFourthSection";
import HomeSecondSection from "../components/Home/HomeSecondSection";
import HomeFifthSection from "../components/Home/HomeFifthSection";

const HomePage = () => {
  return (
    <div>
      {/* Outras seções */}
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeForurthSection />
      <HomeFifthSection />
      {/* Mais seções */}
    </div>
  );
};

export default HomePage;