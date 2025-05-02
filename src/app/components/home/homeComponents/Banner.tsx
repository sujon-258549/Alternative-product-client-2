import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="md:pt-28 md:px-0 px-5 md:mt-0 mt-10">
      <div className=" w-full md:w-[80%] lg:w-[70%] mx-auto pb-8 md:pb-12">
        <h1
          data-aos-duration="1000"
          data-aos="fade-right"
          className="kurali-font text-3xl text-white md:text-5xl font-bold text-center"
        >
          Banner{" "}
          <span className="">
            <span className="">section</span>
          </span>
        </h1>
        <div className="p-0.5 max-w-md mt-8 mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
        <p
          data-aos-duration="1000"
          data-aos="fade-left"
          className="text-center text-white text-[18px] pt-4 md:pt-8"
        >
          Choosing a different product can be a thoughtful decision influenced
          by various factors. One of the primary reasons for switching products
          is to ensure satisfaction with the quality. If the current product
          doesn,t meet expectations or if{" "}
        </p>
      </div>
      <div className="container px-6  mx-auto">
        <div className="items-center lg:flex">
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            className="w-full lg:w-1/2 "
          >
            <div className="lg:max-w-lg">
              <h1 className="text-3xl text-white font-semibold lg:text-4xl">
                Don,t use a wild one all the time
                <br /> your{" "}
                <span className="text-blue-500">
                  That product will not always be in the market
                </span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400 ">
                there,s another option with better features, durability, or
                performance, it makes sense to explore alternatives.
                Cost-effectiveness is another consideration, as different
                products may offer similar benefits at varying price points.
                Additionally, brand loyalty plays a significant role. While
                customers often develop loyalty towards specific brands, better
                deals or superior products from competitors can lead to a change
                in brand preference. Innovation drives product development,.
              </p>

              <Link to={"/allproduct"}>
                <Button className="text-white shadow mt-10 p-5">
                  {" "}
                  Show All Product
                </Button>
              </Link>
            </div>
          </div>

          <div
            data-aos-duration="1000"
            data-aos="fade-right"
            className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://i.ibb.co/5s8WVp2/1212121212.png"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
