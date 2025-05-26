import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="container">
      <div className="md:pt-10 pb-10 md:pb-20">
        <h1 className="py-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white font-rancho">
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
