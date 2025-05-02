import { Button } from "@/components/ui/button";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="container">
      <div className="md:py-10 lg:py-20 w-full flex justify-center">
        <div className="bg-white lg:mx-6 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
              }}
            ></div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 className="text-3xl md:text-4xl kurali-font text-gray-800 font-bold">
              Laptop vary slow This recommend use
              <span className="text-[#16A34A]"> Detox</span>
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
              <Button className="text-white bg-[#424242] shadow mt-10 p-5">
                {" "}
                Show All Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:pt-10 pb-10 md:pb-20">
        <h1 className="py-10  md:text-5xl font-bold text-center text-white font-rancho">
          {" "}
          Our Count Up{" "}
        </h1>
        <div className="mx-5">
          <div className="p-0.5 max-w-md mx-auto  bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
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
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-white ">
                    Our Relevant product count average{" "}
                  </dt>
                  <h1 className="order-1 text-5xl font-bold tracking-tight text-white ">
                    <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                      <span>
                        {" "}
                        <CountUp start={0} end={60}>
                          {({ countUpRef, start }) => (
                            <div>
                              <span ref={countUpRef} />
                              <button onClick={start}>5M+</button>
                            </div>
                          )}
                        </CountUp>
                      </span>
                    </dd>

                    <span></span>
                  </h1>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100  p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Our Member count average
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <span>
                      {" "}
                      <CountUp start={0} end={40}>
                        {({ countUpRef, start }) => (
                          <div>
                            <span ref={countUpRef} />
                            <button onClick={start}>2M+</button>
                          </div>
                        )}
                      </CountUp>
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                    Our Recommend message count average
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <span>
                      <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                        <span>
                          {" "}
                          <CountUp start={0} end={100}>
                            {({ countUpRef, start }) => (
                              <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>10M+</button>
                              </div>
                            )}
                          </CountUp>
                        </span>
                      </dd>
                    </span>
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
