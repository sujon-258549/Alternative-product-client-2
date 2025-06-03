// @ts-expect-error flat
import { Flat } from "@alptugidin/react-circular-progress-bar";

const RadialProgressbar = () => {
  const progressBarStyle = {
    strokeColor: "yellow",
    barWidth: 10,
    bgStrokeColor: "#ffffff",
    bgColor: { value: "#000000", transparency: "20" },
    shape: "full",
    strokeLinecap: "round",
    valueSize: 10,
    valueWeight: "bold",
    valueColor: "yellow",
    valueFamily: "Trebuchet MS",
    textSize: 13,
    textWeight: "bold",
    textColor: "yellow",
    textFamily: "Trebuchet MS",
    loadingTime: 1000,
    miniCircleColor: "#ff0000",
    miniCircleSize: 5,
    valueAnimation: true,
    intersectionEnabled: true,
  };

  return (
    <div className="container">
      <h1 className="text-shadow py-5 md:py-10 mt-10">
        Our Services Progress Bar
      </h1>
      <div className="p-0.5 mb-0 px-4 md:mb-10 lg:mb-16 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10">
        <div>
          <h2 className="text-2xl text-yellow-400 md:text-3xl text-center font-bold py-5">
            Our Recommended
          </h2>
          <div className="w-48 mx-auto">
            <Flat
              progress={81}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              text={"Match"}
              showMiniCircle={true}
              showValue={true}
              sx={progressBarStyle}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl text-yellow-400 text-center font-bold py-5">
            Our Product Add
          </h2>
          <div className="w-48 mx-auto">
            <Flat
              progress={60}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              text={"Match"}
              showMiniCircle={true}
              showValue={true}
              sx={progressBarStyle}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl text-yellow-400 text-center font-bold py-5">
            Our Services
          </h2>
          <div className="w-48 mx-auto">
            <Flat
              progress={50}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              text={"Match"}
              showMiniCircle={true}
              showValue={true}
              sx={progressBarStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialProgressbar;
