import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// @ts-expect-error swiper slider
import "swiper/css";
// @ts-expect-error swiper slider
import "swiper/css/navigation";
import { CategoryData } from "../../const/category";
import { motion } from "framer-motion";
import { Link } from "react-router";

export const CategorySection = () => {
  return (
    <section className="py-6 " aria-labelledby="category-heading">
      <div className="container mx-auto px-4">
        {/* Section Header - Modern Centered Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="category-heading" className="text-shadow">
            Explore Our Categories
          </h2>
          <div className="p-0.5 mb-0 px-4 md:mb-10 lg:mb-16 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
        </motion.div>
        {/* Enhanced Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              nextEl: ".category-swiper-button-next",
              prevEl: ".category-swiper-button-prev",
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="category-swiper pb-12"
          >
            {CategoryData.map((category, index) => (
              <SwiperSlide key={category.slug}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-white dark:bg-[#424242] rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  {/* Card Header with Image Background */}
                  <div
                    className="h-32 w-full bg-[#424242] flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${category.color}10` }}
                  >
                    {/* Category Icon with Floating Effect */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-inner"
                        style={{
                          backgroundColor: `${category.color}20`,
                          border: `1px solid ${category.color}30`,
                        }}
                      >
                        <span
                          className="text-3xl"
                          style={{ color: category.color }}
                        >
                          {category.icon}
                        </span>
                      </div>
                    </motion.div>

                    {/* Floating Item Count */}
                    <span
                      className="absolute bottom-3 right-3 bg-white dark:bg-gray-900 text-xs font-semibold py-1 px-2 rounded-full shadow-xs z-20 border border-gray-100 dark:border-gray-600"
                      style={{ color: category.color }}
                    >
                      {Math.floor(Math.random() * 100) + 20}+ options
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {category.name.slice(0, 10)}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Discover alternatives
                      </p>
                    </div>

                    {/* Dynamic Popularity Meter */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-300">
                          Popularity
                        </div>
                        <div
                          className="text-xs font-bold"
                          style={{ color: category.color }}
                        >
                          {Math.floor(Math.random() * 30) + 70}%
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${Math.floor(Math.random() * 30) + 70}%`,
                            backgroundColor: category.color,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-auto pt-3.5">
                      <Link to={`/relevant-category-product/${category.name}`}>
                        <span className="inline-flex text-yellow-500  items-center text-sm dark:text-primary-300 font-medium">
                          View products
                          <svg
                            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 18l6-6-6-6"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* New Badge for Recently Added Categories */}
                  {index < 5 && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full shadow-xs z-20">
                      New
                    </div>
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button - Centered */}
        <Link to={"/all-category"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white btn-bg px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
            >
              View All Categories
            </motion.button>
          </motion.div>
        </Link>
      </div>

      <style>{`
        .shadow-xs {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .category-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};
