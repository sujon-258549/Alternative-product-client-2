import { Button } from "@/components/ui/button";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="container">
      <div className="md:py-10 lg:py-20 w-full flex justify-center">
        <div className="bg-white lg:mx-6 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          {/* <div className="lg:w-1/2">
            <div
              className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
              }}
            ></div>
          </div> */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3 bg-gray-50 rounded-lg">
              {/* Laptop Images */}
              <img
                src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7"
                alt="Silver laptop on desk"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"
                alt="Laptop with code editor"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
                alt="Macbook on wooden table"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
                alt="Laptop with smartphone"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
                alt="Laptop with coffee"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />

              {/* Desktop Images */}
              <img
                src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg"
                alt="Modern desktop setup"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                alt="Gaming desktop PC"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
                alt="Desktop with dual monitors"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
                alt="Home office desktop"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Minimalist desktop setup"
                className="w-full h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                loading="lazy"
              />
            </div>

            {/* Attribution (not required for Unsplash/Pexels but good practice) */}
            <p className="text-xs text-gray-500 mt-2 text-center">
              Photos from{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Unsplash
              </a>{" "}
              and{" "}
              <a
                href="https://pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pexels
              </a>
            </p>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 className="text-3xl md:text-4xl kurali-font text-gray-800 font-bold">
              Laptop vary slow This recommend use
              <span className="text-yellow-500 ml-1">Desktop</span>
            </h2>
            <p className="mt-4 text-gray-600">
              When considering whether a laptop or a desktop computer is the
              better option, several factors come into play. Firstly,
              portability stands out as a key feature of laptops. Their ability
              to be carried around and used in various locations makes them
              convenient for students, professionals, and anyone who needs to
              work on the go. Conversely, desktop computers are stationary,
              limiting their use to a specific location. on individual needs,
              preferences, and budget constraints. By carefully considering
              factors such as performance requirements, portability, price, and
              workspace limitations, users can make an informed decision that
              aligns with their specific use cases.
            </p>
            <div className="mt-8">
              <Button className=" bg-yellow-400 text-black mt-10 p-5">
                Show All Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-10 pb-10 md:pb-20">
        <h1 className="py-10 md:text-5xl font-bold text-center text-white font-rancho">
          Our Count Up
        </h1>
        <div className="mx-5">
          <div className="p-0.5 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-20">
          <div className="rounded overflow-hidden flex flex-col">
            <a href="#">
              <img
                className="w-full max-h-[500px] object-cover"
                src="https://sanjeevdatta.com/wp-content/uploads/2023/06/how-to-improve-critical-thinking.jpg"
                alt="Sunset in the mountains"
              />
            </a>

            <div className="relative -mt-32 px-10 pt-5 pb-1">
              <dl className="rounded-lg md:py-10 bg-[#424242] shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-white">
                    Our Relevant product count average
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <CountUp
                      className="text-yellow-400"
                      end={60}
                      suffix="M+"
                      duration={2.5}
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Our Member count average
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <CountUp
                      className="text-yellow-400"
                      end={40}
                      suffix="M+"
                      duration={2.5}
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Our Recommend message count average
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <CountUp
                      end={100}
                      className="text-yellow-400"
                      suffix="M+"
                      duration={2.5}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
