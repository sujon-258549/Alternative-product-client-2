// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-expect-error css
import "swiper/css";
// @ts-expect-error css
import "swiper/css/pagination";

// add auto play cod
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import required modules
// import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // add auto aplay cod
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        // modules={[Pagination]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px]  h-48"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/lifestyle-healthy-concept-spa-setting-massage-treatment-body-care-face-beauty-green-pink-tones-hard-light-dark-shadow-banner-format_164638-20004.jpg?ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No use Lux Use{" "}
                  <span className="text-yellow-500 ">Use Sandelina</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px] h-48"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/gardening-tools-accessories-pink-background_185193-88049.jpg?ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No drink Cocacola{" "}
                  <span className="text-yellow-500">drink Mojo</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px] h-48"
            style={{
              backgroundImage:
                "url('https://waltonbd.com/image/catalog/home-page/slider/worldwide-web-view.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No use other Brand{" "}
                  <span className="text-yellow-500 ">Use walton brand</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px] h-48"
            style={{
              backgroundImage:
                "url('https://waltonbd.com/image/catalog/category-banner/television/hotel-mode.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No use other Brand{" "}
                  <span className="text-yellow-500 ">Use walton brand</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px] h-48 "
            style={{
              backgroundImage:
                "url('https://waltonbd.com/image/catalog/home-page/full-block/tamarind-desktop.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No use other Brand{" "}
                  <span className="text-yellow-500 ">Use walton brand</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center z-0 bg-cover md:lg:h-[600px] md:h-[400px] h-48"
            style={{
              backgroundImage:
                "url('https://www.bashundharafood.com/assets/upload/wallpaper_1597834039.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  {" "}
                  <span className="text-yellow-500 ">Use Bosundatra oil</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full bg-center z-10 bg-cover md:lg:h-[600px] md:h-[400px] h-48 "
            style={{
              backgroundImage:
                "url('https://www.shahcement.com/storage/backend.pages/yWE255hcV7rMRaXRIhtJQKmtpLfQeJcOlHnTUfDw.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white lg:text-5xl">
                  No use other sement brand{" "}
                  <span className="text-yellow-500 ">Use Shaha sement</span>
                </h1>
                <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">
                  Show All Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
