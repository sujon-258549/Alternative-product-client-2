import Banner from "../homeComponents/Banner";
import { CategorySection } from "../homeComponents/CategorySection";
import Counter from "../homeComponents/Counter";
import HomeCard from "../homeComponents/HomeCard";
import RadialProgressbar from "../homeComponents/RadialProgressbar";
import RecommendationSection from "../homeComponents/RecommendationSection";
import Slider from "../homeComponents/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeCard />
      <CategorySection />
      <RadialProgressbar />
      <Banner />
      <Counter />
      <RecommendationSection />
    </div>
  );
};

export default Home;
