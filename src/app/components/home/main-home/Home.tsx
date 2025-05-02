import Banner from "../homeComponents/Banner";
import Counter from "../homeComponents/Counter";
import RadialProgressbar from "../homeComponents/RadialProgressbar";
import Slider from "../homeComponents/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <RadialProgressbar />
      <Banner />
      <Counter />
    </div>
  );
};

export default Home;
